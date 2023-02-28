import { getDatabase, ref, onDisconnect, serverTimestamp } from 'firebase/database';

const getDate = async () => {
  return serverTimestamp();
};
export default getDate;
