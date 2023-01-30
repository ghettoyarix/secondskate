import { collection, query, where, getDocs } from 'firebase/firestore';
import { db, auth } from '../firebase';
const profilesRef = collection(db, 'usernames');

export const getProfile = async () => {
  const currentProfile = auth.currentUser.uid;
  const q = query(collection(db, 'accounts'), where('uid', '==', currentProfile));

  const querySnapshot = await getDocs(q);
  const res = [];

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    res.push(doc.data());
  });
  return res[0];
};
