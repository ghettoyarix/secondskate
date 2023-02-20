import { collection, query, where, getDocs } from 'firebase/firestore';
import { db, auth } from 'lib/firebase';

export const getProfile = async (username) => {
  const q = query(collection(db, 'accounts'), where('username', '==', username));

  const querySnapshot = await getDocs(q);
  const res = [];

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    res.push(doc.data());
  });
  if (res.length) {
    return res[0];
  } else return 'nothing';
};
