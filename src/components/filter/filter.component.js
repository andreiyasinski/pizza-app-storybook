import React, { useState, useEffect } from 'react';
import styles from './filter.module.css';
import FilterItem from '../filterItem/filterItem.component';

const Filter = ({ onClick, pizzaTypes }) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    setTypes(pizzaTypes);
  }, [pizzaTypes]);

  return (
    <ul className={styles.container}>
      {
        types.map(item => (
          <FilterItem
            item={item}
            onClick={onClick}
            key={item.id}
          />
        ))
      }
    </ul>
  );
};

export default Filter;