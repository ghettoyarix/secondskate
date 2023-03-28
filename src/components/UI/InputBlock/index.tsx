import React from 'react';
import cn from 'classnames';
interface InputBlockProps {
  value: string | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  title: string;
  placeholder?: string;
  big?: boolean;
  name: string;
}

const InputBlock: React.FC<InputBlockProps> = ({
  value,
  onChange,
  title,
  placeholder,
  big,
  name,
}) => {
  return (
    <div>
      <p className="text-small mb-3 text-gray uppercase font-bold">{title}</p>
      <input
        name={name}
        value={value || ''}
        onChange={onChange}
        className={cn(
          'w-full h-12 rounded-xl outline-gray outline-2 outline focus:outline-primary px-2',
          { 'h-20 mt-0': big },
        )}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputBlock;
