import React from 'react';
import Bid from '../UI/Bid';
import { useUpload } from '../../context/UploadContext';
import { useAuth } from '../../context/AuthContext';
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
  } = useUpload();
  const { currentUser } = useAuth();
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
        username={currentUser?.displayName}
        previewImage={mainPhoto}
        title={title}
        still></Bid>
    </div>
  );
};

export default Preview;
