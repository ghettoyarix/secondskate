import { db } from 'lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export const uploadItem = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'products'), {
      ...data,
    });
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
