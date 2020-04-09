import React from 'react';
import cn from 'classnames';
import styles from './doughSelector.module.css';
import { useSelector } from 'react-redux';
import { doughSelectorText as text } from '../../../text/text';
import { PIZZA_DOUGH, PIZZA_SIZE } from '../../../models/models';

const DoughSelector = ({ changeDoughType, duoghType, size }) => {
  const language = useSelector(state => state.language.value);

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <span className={styles.name}>
          {text[language].traditional}
        </span>
        <input
          onChange={changeDoughType}
          className={styles.radio}
          type="radio"
          name="dough"
          value={PIZZA_DOUGH.TYPE1}
        />
      </label>
      <label className={styles.label}>
        <span className={cn(styles.name, {
          [styles.disabled]:  size === PIZZA_SIZE.SMALL
        })}>
          {text[language].thin}
        </span>
        <input
          onChange={changeDoughType}
          className={styles.radio}
          type="radio"
          name="dough"
          value={PIZZA_DOUGH.TYPE2}
          checked={ size !== PIZZA_SIZE.SMALL && duoghType === PIZZA_DOUGH.TYPE2 }
          disabled={ size === PIZZA_SIZE.SMALL }
        />
      </label>
      <div className={cn(styles.wrapper, {
        [styles.type1]: duoghType === PIZZA_DOUGH.TYPE1,
        [styles.type2]: duoghType === PIZZA_DOUGH.TYPE2 &&  size !== PIZZA_SIZE.SMALL,
      })}></div>
    </div>
  );
};

export default DoughSelector;