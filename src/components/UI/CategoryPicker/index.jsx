import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setType } from '../../../redux/slices/uploadSlice';
import { useUpload } from '../../../context/UploadContext';
const Uploader = () => {
  const { defaultValues, editModalFlag } = useSelector((state) => state.modal);
  const { category, type } = defaultValues;
  const setPickerByValue = (searchedCategory, searchedType) => {
    if (editModalFlag) {
      const neededCategory = categories.find((obj) => {
        return obj.value === searchedCategory;
      });
      setChosenCategory((prev) => neededCategory);
      const neededType = neededCategory.types.find((obj) => {
        return obj.value === searchedType;
      });
      setChosenType((prev) => neededType);
      console.log('cat is', chosenCategory.title);
      console.log('setting ', neededCategory.title);
      console.log('type is ', chosenType.title);
      console.log('setting ', neededType.title);
    }
  };
  const isFirstRender = useRef(true);

  const { chosenCategory, setChosenCategory, chosenType, setChosenType, categories } = useUpload();
  const dispatch = useDispatch();
  useEffect(() => {
    console.log(isFirstRender.current);
    if (editModalFlag) {
      setPickerByValue(category, type);
    }
    isFirstRender.current = false;
  }, []);
  useEffect(() => {
    setChosenType(() => chosenCategory.types[0]);
  }, [chosenCategory]);
  const pickCategory = (obj) => {
    setChosenCategory(() => obj);
    setChosenType(() => chosenCategory.types[0]);

    console.log(chosenCategory.title, chosenType.title);
  };
  return (
    <div className="flex justify-center flex-col  max-w-[700px] gap-5">
      <div className="main flex border-2 border-gray rounded-xl items-center overflow-hidden select-none">
        <div
          onClick={() => {
            console.log('first', chosenCategory.title, chosenType.title);
          }}
          className="bg-primary title h-full py-2   px-3  text-white text-sm font-semibold mr-3">
          Категорія
        </div>

        <div className="flex jusify-around">
          {categories?.map((obj, index) => (
            <label
              key={obj.title}
              className="flex radio p-2 justify-around items-center cursor-pointer">
              <input
                id={obj.title}
                checked={obj.value === chosenCategory.value}
                onChange={() => pickCategory(obj)}
                className="my-auto   transform scale-125"
                type="radio"
                name="categoriesds"
              />
              <div className="title px-2">{obj.title}</div>
            </label>
          ))}
        </div>
      </div>
      <div className="main flex border-2 border-gray rounded-xl overflow-hidden select-none">
        <div className="bg-primary title py-3 my-auto px-5  text-white text-sm font-semibold mr-3">
          Тип
        </div>

        {chosenCategory?.types.map((obj, index) => (
          <label key={obj.title} className="flex radio p-2   items-center cursor-pointer">
            <input
              onChange={() => setChosenType(obj)}
              checked={obj.value === chosenType.value}
              id={'type' + index}
              className="my-auto transform scale-125"
              type="radio"
              name="types"
            />
            <div className="title px-2">{obj.title}</div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Uploader;
