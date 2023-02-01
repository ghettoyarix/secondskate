import React, { useRef, useState, useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';
import { createAccount } from '../../utils/createAccount';
import { useRouter } from 'next/router';
import { checkUsername } from '../../utils/checkUsername';
import checkEmail from '../../utils/checkEmail';
import { debounce } from 'lodash';
import Image from 'next/image';
import CircleLoader from '../../components/widgets/CircleLoader';

export default function Registration() {
  const router = useRouter();
  const { signup, currentUser, setUsername, login } = useAuth();
  useEffect(() => {
    currentUser && router.push('/');
  }, [currentUser]);
  const usernameRef = useRef();
  const passwordRef = useRef();
  const emailRef = useRef();
  const confirmRef = useRef();

  const [loading, setLoading] = useState(false);
  const [mod, setMod] = useState('signUp');
  const [error, setError] = useState('');
  const [usernameFlag, setUsernameFlag] = useState(true);
  const [emailFlag, setEmailFlag] = useState(true);

  const changeMod = (e) => {
    setError('');
    e.preventDefault();
    setUsernameFlag(true);
    mod === 'signIn' ? setMod('signUp') : setMod('signIn');
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    if (!usernameRef.current.value) {
      setError('No username');
      return;
    }
    if (!emailRef.current.value) {
      setError('No email');
      return;
    }
    if (passwordRef.current.value !== confirmRef.current.value) {
      setError('No passwords do not match');
      return;
    }
    try {
      setError('');
      await signup(emailRef.current.value, passwordRef.current.value, usernameRef.current.value);
    } catch (e) {
      setError('Failed to log in' + e);
    }
    setUsername(usernameRef.current.value);
  };
  const handleLogin = async (e) => {
    e.preventDefault();

    if (!emailRef.current.value) {
      setError('No email');
      return;
    }
    if (!passwordRef.current.value) {
      setError('Please enter password');
      return;
    }
    try {
      setError('');
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
    } catch (e) {
      setError('Failed to log in' + e);
    }
  };

  const checkUsernameDebounce = React.useCallback(
    debounce(async () => {
      if (usernameRef.current.value.length >= 5) {
        const res = await checkUsername(usernameRef.current.value); //returns true if such username exists
        setUsernameFlag(!res);
      }
    }, 500),
    [],
  );
  const checkEmailDebounce = React.useCallback(
    debounce(async () => {
      const res = await checkEmail(emailRef.current.value); //returns true if such email exists
      setEmailFlag(!res);
    }, 500),
    [],
  );

  return (
    <div className="wrapper">
      <div className="flex flex-col   items-center">
        <div className="flex  pb-32 max-w-[450px]  flex-col justify-center  items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
          <div>
            <a href="/">
              <h3 className="text-4xl font-bold text-purple-600">Logo</h3>
            </a>
          </div>
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
            <p className="text-mid text-primary">{error}</p>
            <form>
              {mod === 'signUp' && (
                <div>
                  <div className="flex gap-2 items-center">
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 undefined">
                      Userame
                    </label>

                    <div>
                      {!usernameFlag && <p className="text-error text-small"> is already used </p>}
                    </div>
                  </div>
                  <div className="flex flex-col items-start">
                    <input
                      onChange={checkUsernameDebounce}
                      ref={usernameRef}
                      type="text"
                      name="name"
                      className="outline-gray outline-2 outline focus:outline-primary block w-full mt-1 border-lightGray rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    />
                  </div>
                </div>
              )}

              <div className="mt-4  ">
                <label
                  htmlFor="email"
                  className="  flex items-center gap-2 text-sm font-medium text-gray-700 undefined">
                  Email {!emailFlag && <p className="text-error text-small"> is already used </p>}
                </label>{' '}
                <div className="flex flex-col items-start">
                  <input
                    onChange={checkEmailDebounce}
                    ref={emailRef}
                    type="email"
                    name="email"
                    className="block outline-gray outline-2 outline focus:outline-primary w-full mt-1 border-gray rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 undefined">
                  Password
                </label>
                <div className="flex flex-col items-start">
                  <input
                    ref={passwordRef}
                    type="password"
                    name="password"
                    className=" outline-gray outline-2 outline focus:outline-primary first-letter:block w-full mt-1 border-gray rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  />
                </div>
              </div>
              {mod === 'signUp' && (
                <div className="mt-4">
                  <label
                    htmlFor="password_confirmation"
                    className="block text-sm font-medium text-gray-700 undefined">
                    Confirm Password
                  </label>
                  <div className="flex flex-col items-start">
                    <input
                      ref={confirmRef}
                      type="password"
                      name="password_confirmation"
                      className="input-profile"
                    />
                  </div>
                </div>
              )}
              <div className="flex items-center justify-end mt-4">
                <button
                  onClick={changeMod}
                  className="text-sm text-gray-600 underline hover:text-gray-900"
                  href="">
                  {mod === 'signIn' ? 'Not yet registered?' : 'Already registered?'}
                </button>
                <button
                  onClick={mod === 'signUp' ? handleRegister : handleLogin}
                  type="submit"
                  className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-primary border border-transparent rounded-md active:bg-gray-900 false">
                  {mod === 'signUp' ? 'Register' : 'Sign in'}
                </button>
              </div>
              <button onClick={(e) => {}}>{currentUser?.displayName}</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
