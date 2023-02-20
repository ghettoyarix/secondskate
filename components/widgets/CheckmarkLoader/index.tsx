import { useState, useEffect } from 'react';
import Image from 'next/image';
import Checkmark from './Checkmark';
function LoadingAnimation() {
  const [loading, setLoading] = useState(true);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
      setDone(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="  flex justify-center items-center">
      {loading ? (
        <div className="rounded-full border-t-transparent border-8 border-primary border-t-8 border-gray-200 h-24 w-24 animate-spin"></div>
      ) : done ? (
        <Checkmark></Checkmark>
      ) : null}
    </div>
  );
}
export default LoadingAnimation;
