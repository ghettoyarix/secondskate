import React, { useRef, useState, useEffect } from 'react';
import { createAccount } from 'lib/firebase/utils/createAccount';

import LoginInput from 'components/widgets/Inputs/LoginInput';

import { useLogin } from 'hooks/useLogin';
import { useAppSelector } from 'hooks/redux';
import useUpdateEffect from 'hooks/useUpdateEffect';
export default function Registration() {
  const { doesUsernameExistDebounce, data, setData, mod, changeMod, handleSubmit, errors } =
    useLogin();
  const { doesUsernameExist, usernameIsChecking } = useAppSelector((state) => state.login);

  const handleFormChange = (value: string, name: string) => {
    setData({ ...data, [name]: value });
  };

  useUpdateEffect(() => {
    doesUsernameExistDebounce(data.username);
  }, [data.username]);

  return (
    <div className="wrapper">
      <div className="flex flex-col   items-center">
        <div className="flex  pb-32 max-w-[450px]  flex-col justify-center  items-center min-h-screen pt-6 sm:justify-center sm:pt-0 bg-gray-50">
          <div>
            <h3 className="text-4xl font-bold text-purple-600">Seconskate</h3>
          </div>
          <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-white shadow-md sm:max-w-md sm:rounded-lg">
            <p className="text-mid text-primary">{}</p>
            <div>
              {mod === 'SIGN_UP' && (
                <LoginInput
                  isChecking={usernameIsChecking}
                  isValidated={doesUsernameExist}
                  title="Username"
                  name="username"
                  handleChange={handleFormChange}
                  value={data.username}
                  errors={errors.username}
                />
              )}

              <LoginInput
                title="Email"
                name="email"
                handleChange={handleFormChange}
                errors={errors.email}
                value={data.email}
              />
              <LoginInput
                title="Password"
                name="password"
                handleChange={handleFormChange}
                value={data.password}
                type="password"
                errors={errors.password}
              />
              {mod === 'SIGN_UP' && (
                <LoginInput
                  title="Confirm password"
                  name="confirmPassword"
                  handleChange={handleFormChange}
                  value={data.confirmPassword}
                  type="password"
                  errors={errors.confirmPassword}
                />
              )}
              <div className="flex items-center justify-end mt-4">
                <button
                  onClick={changeMod}
                  className="text-sm text-gray-600 underline hover:text-gray-900">
                  {mod === 'SIGN_IN' ? 'Not yet registered?' : 'Already registered?'}
                </button>
                <button
                  onClick={handleSubmit}
                  className="inline-flex items-center px-4 py-2 ml-4 text-xs font-semibold tracking-widest text-white uppercase transition duration-150 ease-in-out bg-primary border border-transparent rounded-md active:bg-gray-900 false">
                  {mod === 'SIGN_UP' ? 'Register' : 'Sign in'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
