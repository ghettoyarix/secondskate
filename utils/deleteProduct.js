import { db, auth } from '../firebase';

const deleteProduct = async (productId) => {
  const queryProps = {
    authId: auth.currentUser.uid,
    productId,
  };
  const res = await fetch(
    `http://${process.env.NEXT_PUBLIC_API_URL}/api/deleteProduct?` +
      new URLSearchParams({ ...queryProps }),
  );
  const product = await res.json();
  console.log(auth.currentUser.uid);
};
export default deleteProduct;
