import React, { useState } from 'react';
import cn from 'classnames';
import styles from './ingredient.module.css';

const Ingredient = ({ onChange, item }) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleInput = async () => {
    onChange(!isChecked, item.name);
    setIsChecked(!isChecked)
  }

  return (
    <li className={styles.listItem}>
      <label className={styles.label}>
        <span
          className={cn({
            [styles.removable]: item.removable,
            [styles.selected]: item.removable && isChecked,
            [styles.notSelected]: item.removable && !isChecked,
          })}
        >
          {item.name}
        </span>
        {
          item.removable
          &&
          <>
            <input
              className={styles.checkbox}
              type="checkbox"
              checked={isChecked}
              onChange={handleInput}
            />
            {
              isChecked
              ?
              <svg className={styles.cancelIcon} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="6.6" stroke="#737272" strokeWidth="0.8"></circle>
                <path d="M4.687 9.41667C4.687 9.41667 5.58895 9.41667 8.1095 9.41667C10.63 9.41667 10.6303 5.46995 8.1095 5.46995C5.58871 5.46995 5.88146 5.46995 4.82073 5.46995M3.5 5.46995L5.55039 6.90736L4.82073 5.46995M3.5 5.46995L5.55039 4L4.82073 5.46995M3.5 5.46995C3.5 5.46995 4.19855 5.46995 4.82073 5.46995" stroke="#737272" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              :
              <svg className={styles.cancelIcon} width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="7" cy="7" r="6.6" stroke="#737272" strokeWidth="0.8"></circle>
                <path d="M5 5L9 9" stroke="#737272" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M9 5L5 9" stroke="#737272" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
            }
          </>
        }
      </label>
    </li> 
  );
};

export default Ingredient;