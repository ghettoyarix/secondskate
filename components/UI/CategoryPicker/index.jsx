import React from 'react';
import { useState, useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory, setType } from '../../../redux/slices/uploadSlice';
import { useUpload } from '../../../context/UploadContext';
const Uploader = () => {
  const { chosenCategory, setChosenCategory, chosenType, setChosenType, categories } = useUpload();
  const dispatch = useDispatch();

  useEffect(() => {
    document.getElementById('type0').checked = true;
    setChosenType(chosenCategory.types[0]);
  }, [chosenCategory]);

  const pickBestFor = (obj) => {
    if (choosenBestFor.some((e) => e.value === obj.value)) {
      setChoosenBestFor(choosenBestFor.filter((el) => el.value !== obj.value));
    } else {
      setChoosenBestFor([...choosenBestFor, obj]);
    }
  };
  const pickCategory = (obj) => {
    setChosenCategory(obj);
    setChosenType(chosenCategory.types[0]);
    console.log(chosenCategory.title, chosenType.title);
  };
  return (
    <div className="flex justify-center flex-col  max-w-[700px] gap-5">
      <div class="main flex border-2 border-gray rounded-xl items-center overflow-hidden select-none">
        <div class="bg-primary title h-full py-2   px-3  text-white text-sm font-semibold mr-3">
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
                onClick={() => pickCategory(obj)}
                className="my-auto   transform scale-125"
                type="radio"
                name="categoriesds"
              />
              <div class="title px-2">{obj.title}</div>
            </label>
          ))}
        </div>
      </div>
      <div class="main flex border-2 border-gray rounded-xl overflow-hidden select-none">
        <div class="bg-primary title py-3 my-auto px-5  text-white text-sm font-semibold mr-3">
          Тип
        </div>

        {chosenCategory?.types.map((obj, index) => (
          <label key={obj.title} className="flex radio p-2   items-center cursor-pointer">
            <input
              onClick={() => setChosenType(obj)}
              checked={obj.value === chosenType.value}
              id={'type' + index}
              className="my-auto transform scale-125"
              type="radio"
              name="types"
            />
            <div class="title px-2">{obj.title}</div>
          </label>
        ))}
      </div>
    </div>
  );
};

export default Uploader;
