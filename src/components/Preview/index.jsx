import React, { useRef } from 'react';
import Bid from '../UI/Bid';
import { useUpload } from '../../context/UploadContext';
import { useAuth } from '../../context/AuthContext';
import { setCategory } from '../../redux/slices/uploadSlice';
const Preview = () => {
  const {
    title,
    description,
    price,
    size,
    chosenType,
    setChosenType,
    chosenCategory,
    chosenBrand,
    chosenCondition,
    mainPhoto,
    categories,
    setChosenCategory,
  } = useUpload();

  const { profile } = useAuth();

  const setPickerByValue = (searchedCategory, searchedType) => {
    searchedCategory = 'skateboards';
    searchedType = 'trucks';
    const neededCategory = categories.find((obj) => {
      return obj.value === searchedCategory;
    });
    setChosenCategory(neededCategory);
    const neededType = neededCategory.types.find((obj) => {
      return obj.value === searchedType;
    });
    setChosenType(neededType);
  };
  return (
    <div className="max-w-[304px]">
      <p className="text-mid font-bold mb-8">Preview</p>
      <Bid
        brand={chosenBrand}
        description={description}
        size={size}
        condition={chosenCondition.value}
        price={price}
        category={chosenCategory?.value}
        type={chosenType?.value}
        username={profile?.username}
        previewImage={mainPhoto}
        title={title}
        still></Bid>

      <input type="text" />
    </div>
  );
};

export default Preview;
