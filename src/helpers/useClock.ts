import React, { ReactNode, useCallback, useEffect, useState } from 'react';

function useClock() {
  const [tick, setTick] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTick((tick) => !tick);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return tick;
}

export default useClock;
