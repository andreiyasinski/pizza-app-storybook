import React from 'react';
import cn from 'classnames';
import styles from './sizeSelector.module.css';
import { useSelector } from 'react-redux';
import { sizeSelectorText as text } from '../../../text/text';
import { PIZZA_SIZE } from '../../../models/models';

const SizeSelector = ({ changeSize, size }) => {
  const language = useSelector(state => state.language.value);

  return (
    <div className={styles.container}>
      <label className={styles.label}>
        <span className={styles.name}>{text[language].small}</span>
        <input className={styles.radio} type="radio" name="size" value={PIZZA_SIZE.SMALL} defaultChecked={true} onChange={changeSize} />
      </label>
      <label className={styles.label}>
      <span className={styles.name}>{text[language].medium}</span>
        <input className={styles.radio} type="radio" name="size" value={PIZZA_SIZE.MEDIUM} onChange={changeSize} />
      </label>
      <label className={styles.label}>
        <span className={styles.name}>{text[language].big}</span>
        <input className={styles.radio} type="radio" name="size" value={PIZZA_SIZE.BIG} onChange={changeSize} />
      </label>
      <div className={cn(styles.wrapper, {
        [styles.small]: size === PIZZA_SIZE.SMALL,
        [styles.medium]: size === PIZZA_SIZE.MEDIUM,
        [styles.big]: size === PIZZA_SIZE.BIG
      })}></div>
    </div>
  );
};

export default SizeSelector;