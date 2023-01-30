import { collection, query, where, getDocs } from 'firebase/firestore';
import { db, auth } from '../firebase';

export const getProducts = async () => {
  const q = query(collection(db, 'products'));

  const querySnapshot = await getDocs(q);
  const res = [];

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    res.push(doc.data());
  });

  return res;
};
