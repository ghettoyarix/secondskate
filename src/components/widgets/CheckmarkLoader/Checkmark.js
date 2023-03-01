import React, { useState, useEffect } from 'react';
import styles from './Checkmark.module.css';

function Checkmark() {
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
    <div className={styles.container}>
      {done && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={styles.svg}
          viewBox="0 0 20 20"
          fill="currentColor">
          <path fillRule="evenodd" d="M4 10.75l3 3L16 6" className={styles.line} />
          <path id="path-check" fillRule="evenodd" d="M4 10.75l3 3L16 6" className={styles.check} />
        </svg>
      )}
    </div>
  );
}

export default Checkmark;
