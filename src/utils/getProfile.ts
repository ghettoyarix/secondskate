import { collection, query, where, getDocs } from 'firebase/firestore';
import { db, auth } from 'lib/firebase';
import type Profile from 'types/models/Product';

const getProfile = async (username: string): Promise<Profile | 'nothing'> => {
  const q = query(collection(db, 'accounts'), where('username', '==', username));

  const querySnapshot = await getDocs(q);
  const res: Profile[] = [];

  querySnapshot.forEach((doc) => {
    // doc.data() is never undefined for query doc snapshots
    res.push(doc.data() as Profile);
  });
  if (res.length) {
    return res[0];
  } else return 'nothing';
};
export default getProfile;
