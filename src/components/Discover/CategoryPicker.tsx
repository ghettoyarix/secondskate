import React from 'react';
import { discoverCategories } from 'constants/options';
import { useAppSelector, useAppDispatch } from 'hooks/redux';
import cn from 'classnames';
import { setChosenCategory } from 'redux/slices/discoverSlice';
const CategoryPicker = () => {
  const { chosenCategory } = useAppSelector((state) => state.discover);
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-wrap min-w-[300px] gap-3 ">
      {discoverCategories.map((obj, i) => (
        <p
          key={i}
          onClick={() => dispatch(setChosenCategory(obj))}
          className={cn(
            '  rounded-2xl cursor-pointer  whitespace-nowrap	 py-[6px] px-3  my-auto   font-bold text-reg ',
            {
              'bg-black text-white': obj.title === chosenCategory.title,
            },
          )}>
          {obj.title as string}
        </p>
      ))}
      <br />
    </div>
  );
};

export default CategoryPicker;
