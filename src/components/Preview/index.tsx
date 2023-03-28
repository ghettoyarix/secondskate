import React, { useRef } from 'react';
import Bid from '../UI/Bid';
import { useUpload } from '../../context/UploadContext';
import { useAuth } from '../../context/AuthContext';
import { setCategory } from '../../redux/slices/uploadSlice';
const Preview = () => {
  const { chosenType, chosenCategory, chosenBrand, chosenCondition, mainPhoto, formData } =
    useUpload();

  const { profile } = useAuth();

  return (
    <div className="max-w-[304px]">
      <p className="text-mid font-bold mb-8">Preview</p>
      <Bid
        _id={'2'} // reconsider it
        fileNames={[]}
        photoURLs={[]}
        productId={322}
        brand={chosenBrand.title as string}
        description={formData.description}
        size={formData.size}
        condition={chosenCondition.value}
        price={formData.price}
        category={chosenCategory?.value}
        type={chosenType?.value}
        username={profile?.username}
        previewImage={mainPhoto}
        title={formData.title}
        still></Bid>

      <input type="text" />
    </div>
  );
};

export default Preview;
