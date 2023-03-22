import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
  listAll,
  deleteObject,
} from 'firebase/storage';
import { updateProfile } from 'firebase/auth';
import { updateProfileInfo } from './updateProfileInfo';
import { auth, storage } from 'lib/firebase';
const setPhoto = async (downloadURL) => {
  await updateProfile(auth.currentUser, {
    photoURL: downloadURL,
  });
  updateProfileInfo({ profilePhoto: downloadURL });
};
const deletePrevious = async () => {
  const listRef = ref(storage, `profilePhotos/${auth.currentUser.uid}`);
  const photos = await listAll(listRef);
  const deleted = await Promise.all(
    photos.items.map((itemRef) => {
      deleteObject(itemRef);
    }),
  );
};
const updateProfilePhoto = async (file) => {
  return new Promise(async (resolve, reject) => {
    const storageRef = ref(storage, `profilePhotos/${auth.currentUser.uid}/${file.name}`);
    await deletePrevious();
    const uploadTask = uploadBytesResumable(storageRef, file);

    uploadTask.on(
      'state_changed',
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

        switch (snapshot.state) {
          case 'paused':
            break;
          case 'running':
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
