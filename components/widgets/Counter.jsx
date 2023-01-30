import React, { useEffect } from 'react';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reload } from '../../redux/slices/counterSlice';

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  useEffect(() => {
    dispatch(reload());
  }, []);

  const dispatch = useDispatch();

  const [counter, setCounter] = useState(1);

  return (
    <div className="max-h-[63px] px-2 flex justify-between items-center  w-[105px] outline outline-purple">
      <svg
        onClick={() => dispatch(decrement())}
        width="9"
        height="15"
        viewBox="0 0 9 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M7.96029 1L2 7.5L7.96029 14" stroke="#BDBDBD" stroke-width="1.5" />
      </svg>
      <p className="text-base">{count}</p>
      <svg
        onClick={() => dispatch(increment())}
        width="8"
        height="15"
        viewBox="0 0 8 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M0.624668 14L6.58496 7.5L0.624668 1" stroke="#BDBDBD" stroke-width="1.5" />
      </svg>
    </div>
  );
};

export default Counter;
