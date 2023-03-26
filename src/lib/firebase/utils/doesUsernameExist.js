import { db } from 'lib/firebase';
import { getDoc, doc } from 'firebase/firestore';

export const doesUsernameExist = async (username) => {
  try {
    const docRef = doc(db, 'accounts', username);
    const docSnap = await getDoc(docRef);
    return docSnap.exists();
  } catch (e) {
    throw e;
  }
};
