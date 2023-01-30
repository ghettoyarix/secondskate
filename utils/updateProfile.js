import { collection, query, updateDoc, doc, getDocs, getDoc, where } from 'firebase/firestore';
import { db, auth } from '../firebase';

export const updateProfile = async ({ instagram, telegram, title }) => {
  const acc = auth.currentUser.uid;
  const q = query(collection(db, 'accounts'), where('uid', '==', acc));
  try {
    const querySnapshot = await getDocs(q);
    const accountRef = [];
    querySnapshot.forEach((doc) => {
      accountRef.push(doc.id);
    });
    console.log(accountRef[0]);
    const docRef = doc(db, 'accounts', accountRef[0]);
    await updateDoc(docRef, {
      instagram,
      telegram,
      title,
    });
  } catch (e) {
    console.error(e);
  }
};
