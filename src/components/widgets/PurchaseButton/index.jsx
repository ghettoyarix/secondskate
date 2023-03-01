import React from 'react';
import styles from './PurchaseButton.module.scss';
const PurchaseButton = ({ title }) => {
  return (
    <div className={styles.root}>
      <p className=" text-reg font-bold text-white  m-auto">{title}</p>
    </div>
  );
};

export default PurchaseButton;
