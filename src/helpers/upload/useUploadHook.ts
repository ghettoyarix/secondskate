import { useAuth } from 'context/AuthContext';
import { useUpload } from 'context/UploadContext';
import { z } from 'zod';
import uploadPhotos from 'lib/firebase/utils/uploadPhotos';
import addURL from 'helpers/upload/addURL';
export const FormDataScheme = z.object({
  title: z.string().max(25),
  price: z.string().max(9999),
  description: z.string().max(100),
  size: z.string().optional(),
});

type ProductPostData = {
  uploadedBy: string;
  brand: string;
  condition: string;
  fileNames: string[];
  category: string;
  type: string;
  username: any;
  title: string;
  price: number;
  description: string;
  size?: string | undefined;
};

const useUploadHook = () => {
  const {
    formData,
    chosenCondition,
    files,
    chosenBrand,
    chosenCategory,
    chosenType,
    setError,
    setUploading,
  } = useUpload();

  const { currentUser, profile } = useAuth();

  const postProduct = async () => {
    const fileNames: string[] = [];
    files.map((file: File) => fileNames.push(file.name));
    const data = {
      ...formData,
      uploadedBy: currentUser.uid,
      brand: chosenBrand.title as string,
      condition: chosenCondition.value,
      fileNames,
      category: chosenCategory.value,
      type: chosenType.value,
      username: profile.username,
    };

    const parseData = FormDataScheme.safeParse(formData);

    if (parseData.success) {
      const post = fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/uploadProduct`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json, text/plain, */*',
          'Content-Type': 'application/json',
        },
      });
      return (await post).json();
    } else {
      setError((error) => error + 'Fill all the required fields');
      return false;
    }
  };
  const uploadPhotosCall = async (productId: number) => {
    if (files) {
      try {
        Promise.all(files.map((file) => uploadPhotos(file, productId))).then((URL) => {
          addURL(URL, productId);
          setUploading(false);
        });
      } catch (error) {
        setError(error as string);
      }
    }
  };
  return { postProduct, uploadPhotosCall };
};

export default useUploadHook;
