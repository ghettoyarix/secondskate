import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

export const uploadItem = async (data) => {
  try {
    const docRef = await addDoc(collection(db, 'products'), {
      ...data,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
