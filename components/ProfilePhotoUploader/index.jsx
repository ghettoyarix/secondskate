import React, { useState } from 'react';
import Image from 'next/image';
import Dropzone from 'react-dropzone';
import Button from '../UI/Button';
import { useAuth } from '../../context/AuthContext';
import updateProfilePhoto from '../../utils/updateProfilePhoto';
import CircleLoader from '../widgets/CircleLoader';

const ProfilePhotoUploader = () => {
  const { currentUser, profile } = useAuth();
  const [profileUploading, setProfileUploading] = useState(false);
  const handleChange = async (acceptedFiles) => {
    const photoFile = acceptedFiles[0];
    setProfileUploading(true);
    await updateProfilePhoto(photoFile);
    setProfileUploading(false);
  };
  return (
    <div className="flex gap-12">
      <Image
        alt="profilepic"
        height={128}
        width={128}
        className="rounded-full"
        src={profile?.profilePhoto}></Image>
      <div className="text-lable max-w-[256px] flex flex-col justify-between  ">
        <p>Profile photo</p>
        <p className="text-gray  text-small">
          We recommend an image of at least 400x400. Gifs work too 🙌
        </p>

        <Dropzone maxFiles={1} onDrop={(acceptedFiles) => handleChange(acceptedFiles)}>
          {({ getRootProps, getInputProps }) => (
            <section>
              <div {...getRootProps()}>
                <input onSelect={(e) => e.target.value} {...getInputProps()} />
                <Button>Upload {profileUploading && <CircleLoader />}</Button>
              </div>
            </section>
          )}
        </Dropzone>
      </div>
    </div>
  );
};

export default ProfilePhotoUploader;
