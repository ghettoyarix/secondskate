import { db } from 'lib/firebase';
import { collection, addDoc, setDoc, doc } from 'firebase/firestore';

export const createAccount = async (username, uid) => {
  try {
    const docRef = await setDoc(doc(db, 'accounts', username), { username: username, uid: uid });
  } catch (e) {
    console.error('Error adding document: ', e);
  }
};
