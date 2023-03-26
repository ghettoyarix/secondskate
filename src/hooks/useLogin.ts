import { debounce } from 'lodash';
import React, { useCallback, useState, useEffect } from 'react';
import { z } from 'zod';
import { doesUsernameExist } from 'lib/firebase/utils/doesUsernameExist';
import { useAppDispatch } from './redux';
import { checkEmail, checkUsername } from 'redux/actionCreators/login';
import { useRouter } from 'next/router';
import { useAuth } from 'context/AuthContext';

type Mod = 'SIGN_IN' | 'SIGN_UP';
type Errors = {
  username?: string[];
  email?: string[];
  password?: string[];
  confirmPassword?: string[];
};
export const useLogin = () => {
  const defaultState = { username: '', email: '', password: '', confirmPassword: '' };
  const [data, setData] = useState<typeof defaultState>(defaultState);
  const [errors, setErrors] = useState<Errors>({});

  const router = useRouter();
  const { signUp, currentUser, setUsername, login } = useAuth();

  useEffect(() => {
    currentUser && router.push('/');
  }, [currentUser]);

  const dispatch = useAppDispatch();
  const [mod, setMod] = useState<Mod>('SIGN_UP');
  const changeMod = (e: any) => {
    e.preventDefault();
    mod === 'SIGN_IN' ? setMod('SIGN_UP') : setMod('SIGN_IN');
    setData(defaultState);
  };

  const signInScheme = z.object({
    email: z.string().email(),
    password: z.string().min(8),
  });

  const signUpScheme = signInScheme.extend({
    username: z.string().min(5).max(15),
    confirmPassword: z.string(),
  });
  const loginCall = async () => {
    await login(data.email, data.email);
  };

  const signUpCall = async () => {
    await signUp(data.email, data.email);
    await setUsername(data.username);
  };
  const ModActions = {
    SIGN_UP: { scheme: signUpScheme, action: signUpCall },
    SIGN_IN: { scheme: signInScheme, action: loginCall },
  };

  type SignUpScheme = z.infer<typeof signUpScheme>;
  type SignInScheme = z.infer<typeof signInScheme>;

  const handleSubmit = async () => {
    const scheme = ModActions[mod].scheme;
    const result = scheme.safeParse(data);
    if (!result.success) {
      const errors = result.error.flatten().fieldErrors;
      setErrors(errors);
    }
    validatePasswordConfirmation(data);
    await ModActions[mod].action();
  };

  function validatePasswordConfirmation(data: SignUpScheme) {
    if (data.password !== data.confirmPassword && mod === 'SIGN_UP') {
      console.log('ss');
      setErrors((prev) => ({ ...prev, confirmPassword: ['Passwords do not match'] }));
      return;
    } else setErrors((prev) => ({ ...prev, confirmPassword: [] }));
  }
  const useCallbackActionDebounce = (actionCreator: any) =>
    useCallback(
      debounce(async (value: string) => {
        dispatch(actionCreator(value));
      }, 500),
      [],
    );

  const doesUsernameExistDebounce = useCallbackActionDebounce(checkUsername);
  const doesEmailExistDebounce = useCallbackActionDebounce(checkEmail);

  return {
    doesUsernameExistDebounce,
    doesEmailExistDebounce,
    data,
    setData,
    mod,
    changeMod,
    handleSubmit,
    errors,
  };
};
