import React from 'react';
import cn from 'classnames';
const InputBlock = ({ defaultValue, onChange, title, placeholder, forwardedRef, big }) => {
  return (
    <div>
      <p className="text-small mb-3 text-gray uppercase font-bold   ">{title}</p>
      <input
        ref={forwardedRef}
        defaultValue={defaultValue}
        onChange={onChange}
        className={cn(
          '  w-full h-12 rounded-xl outline-gray outline-2 outline focus:outline-primary px-2',
          { ' h-20 mt-0 ': big },
        )}
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputBlock;
