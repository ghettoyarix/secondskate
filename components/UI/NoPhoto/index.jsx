import Image from 'next/image';
import CircleLoader from '../../widgets/CircleLoader';
const NoPhoto = ({ still }) => {
  return (
    <div className="flex  h-full items-center justify-center">
      {!still ? (
        <CircleLoader></CircleLoader>
      ) : (
        <Image src="/svg/no-photo.svg" alt="no-photo" width={68} height={68}></Image>
      )}
    </div>
  );
};

export default NoPhoto;
