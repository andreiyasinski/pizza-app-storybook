import React from 'react';
import styles from './counterButton.module.css';

const CounterButton = ({ onClick, symbol }) => {
  return (
    <button
      className={styles.count}
      onClick={onClick}
    >
      {symbol}
    </button>
  );
};

export default CounterButton;