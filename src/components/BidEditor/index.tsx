import React, { useState, useRef, useEffect } from 'react';
import DropDown from 'components/UI/DropDown/';
import Button from 'components/UI/Button/';
import { CONDITIONS } from '../../constants';
import Dropzone from 'react-dropzone';
import Dragger from 'components/widgets/Dragger';
import { useRouter } from 'next/router';
import { useAuth } from 'context/AuthContext';
import InputBlock from 'components/UI/InputBlock';
import uploadPhotos from 'lib/firebase/utils/uploadPhotos';
import CategoryPicker from 'components/UI/CategoryPicker';
import CircleLoader from 'components/widgets/CircleLoader';

import { BRANDS } from '../../constants';
import { useUpload } from 'context/UploadContext';
import { useAppSelector } from 'hooks/redux';
import useUploadHook from 'helpers/upload/useUploadHook';

const BidEditor = (props: any) => {
  const { defaultValues, editMod } = props;

  const [error, setError] = useState('');
  const [uploading, setUploading] = useState(false);

  const [loading, setLoading] = useState(true);

  const { currentUser, profile } = useAuth();
  const { postProduct, uploadPhotosCall } = useUploadHook();
  const {
    setMainPhoto,
    chosenCondition,
    setChosenCondition,
    chosenBrand,
    setChosenBrand,
    files,
    setFiles,
    chosenCategory,
    chosenType,
    handleChange,
    formData,
  } = useUpload();

  useEffect(() => {
    setLoading(false);
    if (!loading) {
      !currentUser && router.push('login');
    }
  }, [currentUser]);

  const router = useRouter();

  const handleFilesChange = (acceptedFiles: File[]) => {
    if (files.length < 4) {
      setFiles([...files, ...acceptedFiles]);
    }
  };
  useEffect(() => {
    if (files.length) {
      setMainPhoto(URL.createObjectURL(files[0]));
    }
  }, [files]);

  const uploadCall = async () => {
    if (files.length) {
      try {
        setUploading(true);
        let response: number = await postProduct();

        if (response) {
          uploadPhotosCall(response);
        }
      } catch (errorMessage) {
        console.log(errorMessage);
      }
    } else if (!files.length) {
      return setError((error) => error + ' Upload at least 1 photo.');
    } else {
      return setError('All fields are required.');
    }
  }; /// CONVERT TO ZOD ASAP!

  const filterFiles = (obj: File) => {
    const filteredFiles = files.filter((file) => file !== obj);
    setFiles(filteredFiles);
    if (files.length == 1) {
      setMainPhoto('');
    }
  };

  return (
    currentUser && (
      <div className="   flex justify-between">
        <div className="max-w-[640px]">
          <div>
            <h1
              onClick={() => {
                console.log(formData);
              }}
              className="text-giant font-bold">
              Upload your stuff!
            </h1>

            <h2 className="Upload file">Drag or choose your file to upload</h2>
            <p className="text-reg text-gray">Drag or choose your file to upload</p>
          </div>
          <Dropzone maxFiles={4} onDrop={(acceptedFiles) => handleFilesChange(acceptedFiles)}>
            {({ getRootProps, getInputProps }) => (
              <section>
                <div {...getRootProps()}>
                  <input {...getInputProps()} />
                  <div className="max-h-[182px] cursor-pointer  py-16 bg-lightOne rounded-xl mb-8">
                    <div className="flex gap-2 flex-col items-center justify-center">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3 5C3 2.79086 4.79086 1 7 1H15.3431C16.404 1 17.4214 1.42143 18.1716 2.17157L19.8284 3.82843C20.5786 4.57857 21 5.59599 21 6.65685V19C21 21.2091 19.2091 23 17 23H7C4.79086 23 3 21.2091 3 19V5ZM19 8V19C19 20.1046 18.1046 21 17 21H7C5.89543 21 5 20.1046 5 19V5C5 3.89543 5.89543 3 7 3H14V5C14 6.65685 15.3431 8 17 8H19ZM18.8891 6C18.7909 5.7176 18.6296 5.45808 18.4142 5.24264L16.7574 3.58579C16.5419 3.37035 16.2824 3.20914 16 3.11094V5C16 5.55228 16.4477 6 17 6H18.8891Z"
                          fill="#777E91"
                        />
                        <path
                          d="M11.6172 9.07588C11.4993 9.12468 11.3888 9.19702 11.2929 9.29289L8.29289 12.2929C7.90237 12.6834 7.90237 13.3166 8.29289 13.7071C8.68342 14.0976 9.31658 14.0976 9.70711 13.7071L11 12.4142V17C11 17.5523 11.4477 18 12 18C12.5523 18 13 17.5523 13 17V12.4142L14.2929 13.7071C14.6834 14.0976 15.3166 14.0976 15.7071 13.7071C16.0976 13.3166 16.0976 12.6834 15.7071 12.2929L12.7071 9.29289C12.4125 8.99825 11.9797 8.92591 11.6172 9.07588Z"
                          fill="#777E91"
                        />
                      </svg>
                      <p className="text-gray">PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.</p>
                    </div>
                  </div>
                </div>
              </section>
            )}
          </Dropzone>

          <Dragger updateArray={setFiles} providedArray={files} removeItem={filterFiles}></Dragger>

          <div className="flex flex-col gap-6 pb-10 border-lightGray border-b-2 mb-10">
            <p className="text-lable font-bold ">Item Details</p>
            <p className="text-small text-gray">
              The obligatory fields are marked with a <span className="text-lable">*</span>
            </p>
            <p className="text-error text-mid">{error}</p>
            <div className="flex justify-between">
              <div>
                <p className="text-small mb-3 text-gray uppercase font-bold text-grays">
                  Item name*
                </p>
                <input
                  onChange={handleChange}
                  value={formData.title}
                  name="title"
                  className=" w-[520px] h-12 rounded-xl outline-gray outline-2 outline focus:outline-primary px-2"
                  placeholder='e. g. "Redeemable Bitcoin Card with logo"'
                />
              </div>
              <div>
                <p className="text-small  mb-3 text-gray uppercase font-bold text-grays">Price*</p>
                <input
                  onChange={handleChange}
                  type="number"
                  name="price"
                  value={formData.price || ''}
                  className="  w-[100px] h-12 rounded-xl outline-gray outline-2 outline focus:outline-primary px-2"
                  placeholder="40 UAH"
                />
              </div>
            </div>
            <div>
              <p className="text-small mb-3 text-gray uppercase font-bold text-grays">
                Description
              </p>

              <textarea
                name="description"
                maxLength={200}
                value={formData.description || ''}
                onChange={handleChange}
                className=" w-[640px] h-12 rounded-xl outline-gray outline-2 outline focus:outline-primary px-2"
                placeholder="e. g. “After purchasing you will able to recived the logo"
              />
            </div>{' '}
            <CategoryPicker></CategoryPicker>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-small mb-3 text-gray uppercase font-bold text-grays">Brands</p>
                <DropDown
                  searchable
                  pickOption={setChosenBrand}
                  options={BRANDS.sort()}
                  chosenOption={chosenBrand}
                />
              </div>
              <InputBlock
                value={formData.size || ''}
                name="size"
                onChange={handleChange}
                title={'Size'}></InputBlock>
              <div>
                <p className="text-small mb-3 text-gray uppercase font-bold text-grays">
                  Condition
                </p>
                <DropDown
                  pickOption={setChosenCondition}
                  options={CONDITIONS}
                  chosenOption={chosenCondition}
                />
              </div>
            </div>
          </div>

          <Button onClick={uploadCall} className="mt-8 w-[168px]" primary>
            Create item {uploading && <CircleLoader></CircleLoader>}
          </Button>
        </div>
      </div>
    )
  );
};
BidEditor.defaultProps = {
  defaultValues: {},
  editMod: false,
};
export default BidEditor;
