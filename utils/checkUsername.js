import { db } from 'lib/firebase';
import { getDoc, doc } from 'firebase/firestore';

export const checkUsername = async (username) => {
  const docRef = doc(db, 'accounts', username);
  const docSnap = await getDoc(docRef);
  return docSnap.exists();
};
