import React from 'react';
import styles from './orderItem.module.css';
import { basketItemText as text } from '../../../text/text';
import { useSelector } from 'react-redux';

const OrderItem = ({ order }) => {
  const language = useSelector(state => state.language.value);
  
  return (
    <li className={styles.container}>
      <ul className={styles.list}>
        {
          order.item.map(item => (
            <li key={item.id} className={styles.listItem}>
              <img className={styles.image} src={item.pizza.image} alt={item.pizza.name} />
              <div className={styles.description}>
                <h2 className={styles.name}>{item.pizza.name}</h2>
                <p className={styles.details}>
                  {`${item.pizza.size.name} ${item.pizza.size.diameter} ${text[language].cm}, ${item.pizza.dough.toLowerCase()} ${text[language].dough}`}
                </p>
                {
                  item.pizza.removed.length !== 0 && <p className={styles.details}>{`${text[language].removed}: ${item.pizza.removed.join(', ')}`}</p>
                }
                {
                  item.pizza.extra.length !== 0 && <p className={styles.details}>{`${text[language].added}: ${item.pizza.extra.map(v => v.name).join(', ')}`}</p>
                }
                <p className={styles.details}>{`${text[language].amount}: ${item.amount}`}</p>
              </div>
            </li>
          ))
        }
      </ul>
      <h2 className={styles.date}>{order.date}</h2>
    </li>
  );
};

export default OrderItem;