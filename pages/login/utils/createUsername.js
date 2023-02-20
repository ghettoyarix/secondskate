import { db } from 'lib/firebase';
import { collection, addDoc } from 'firebase/firestore';

export const createUsername = async (username) => {
  try {
    const docRef = await addDoc(collection(db, 'usernames'), {
      username: username,
    });
    console.log('Document written with ID: ', docRef.id);
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
