import React from 'react';
import styles from './popover.module.css';

const Popover = ({children}) => {
  return (
    <div className={styles.message}>
      {children}
    </div>
  );
};

export default Popover;