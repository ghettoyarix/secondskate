import { auth, storage } from 'lib/firebase';
import { ref, listAll, deleteObject } from 'firebase/storage';

const deleteProduct = async (productId) => {
  const queryProps = {
    authId: auth.currentUser.uid,
    productId,
  };
  const recordDeleted = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/deleteProduct?` +
      new URLSearchParams({ ...queryProps }),
  );
  const fileDeletePermit = await recordDeleted.json();

  if (fileDeletePermit) {
    const listRef = ref(storage, `products/${productId}`);
    const photos = await listAll(listRef);
    const deleted = await Promise.all(
      photos.items.map((itemRef) => {
        deleteObject(itemRef);
      }),
    );
    console.log('files deleted');
    return true;
  }
  return false;
};
export default deleteProduct;
