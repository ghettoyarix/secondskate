import { getStorage, ref, getDownloadURL } from 'firebase/storage';

const uploadPhotos = async (productId, thumbName) => {
  const storage = getStorage();
  return new Promise((resolve, reject) => {
    getDownloadURL(ref(storage, `${productId}/${thumbName}`))
      .then((url) => {
        resolve(url);
        console.log(url);
      })
      .catch((error) => {
        reject(error);
      });
  });
};
export default uploadPhotos;
