import React from 'react';
import styles from './popUpOrderSuccess.module.css';
import PopUp from '../../ui-kit/popUp/popUp.component';
import complite from '../../assets/complite.png';
import { useSelector } from 'react-redux';
import { basketText as text } from '../../text/text';

const PopUpOrderSuccess = () => {
  const language = useSelector(state => state.language.value);
  
  return (
    <PopUp>
      <div className={styles.container}>
        <img src={complite} className={styles.compliteImg} alt="complite" />
        <h2 className={styles.compliteTitle}>{text[language].compliteTitle}</h2>
        <p>{text[language].compliteSubtitle}</p>
      </div>
    </PopUp>
  );
};

export default PopUpOrderSuccess;