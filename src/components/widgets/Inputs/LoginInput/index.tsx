import { type } from 'os';
import React, { memo } from 'react';
import CircleLoader from 'components/widgets/CircleLoader';

import Image from 'next/image';
import Validator from './Validator';
type LoginInputProps = {
  name: string;
  handleChange: (value: string, name: string) => void;
  value: string;
  isValidated?: boolean | null;
  title: string;
  type?: 'password' | 'email' | 'text';
  isChecking?: boolean | null;
  errors?: string[];
};

const LoginInput = ({
  handleChange,
  isChecking,
  title,
  isValidated,
  name,
  value,
  type,
  errors,
}: LoginInputProps) => {
  return (
    <div className="mt-4">
      <div className="flex gap-2 items-center">
        <label htmlFor={name} className="block text-sm font-medium text-gray-700 undefined">
          {title}
        </label>
        <Validator isChecking={isChecking} isValidated={isValidated} />
      </div>
      <div className="flex flex-col items-start">
        <input
          value={value}
          onChange={(event) => handleChange(event.target.value, event.target.name)}
          type={type}
          name={name}
          className="outline-gray outline-2 outline focus:outline-primary block w-full mt-1 border-lightGray rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        />
        <p className="text-error">{errors?.join(' ')}</p>
      </div>
    </div>
  );
};
const MemoLoginInput = memo(LoginInput);
export default MemoLoginInput;
