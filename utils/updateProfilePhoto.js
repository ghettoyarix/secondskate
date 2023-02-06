import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import { updateProfileInfo } from './updateProfileInfo';
import { auth } from '../firebase';
const setPhoto = async (downloadURL) => {
  await updateProfile(auth.currentUser, {
    photoURL: downloadURL,
  });
  updateProfileInfo({ profilePhoto: downloadURL });
};
const updateProfilePhoto = async (file) => {
  return new Promise((resolve, reject) => {
    const storage = getStorage();
    const storageRef = ref(storage, `profilePhotos/${auth.currentUser.uid}/${file.name}`);

    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        console.log(error);
      },
      async () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        await getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setPhoto(downloadURL)
            .then(() => {
              resolve(true);
            })
            .catch((error) => {
              resolve(error);
            });
        });
      },
    );
  });
};
export default updateProfilePhoto;
