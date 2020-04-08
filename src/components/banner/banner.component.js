import React from 'react';
import styles from './bunner.module.css';
import { bunnerText as text } from '../../text/text';
import { useSelector } from 'react-redux';

const Bunner = () => {
  const language = useSelector(state => state.language.value);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>{text[language].title}</h2>
      <h3 className={styles.subtitle}>{text[language].subtitle}</h3>
    </div>
  );
};

export default Bunner;