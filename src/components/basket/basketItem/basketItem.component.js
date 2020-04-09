import React from 'react';
import styles from './basketItem.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromBasket, changeAmountInBasket } from '../../../actions';
import { basketItemText as text } from '../../../text/text';
import CounterButton from '../../../ui-kit/counterButton/counterButton.component';

const BasketItem = ({ item }) => {
  const language = useSelector(state => state.language.value);
  const { name, image, size, dough, removed, extra, price } = item.pizza;
  const dispatch = useDispatch();

  const totalPizzaPrice = (+price * item.amount).toFixed(2)

  const deleteItem = (id) => {
    dispatch(deleteFromBasket(id))
  }

  const increaseAmount = (id) => {
    const newAmount = item.amount + 1;
    dispatch(changeAmountInBasket(id, newAmount))
  }

  const decreaseAmount = (id) => {
    const newAmount = item.amount - 1;
    item.amount > 1 ? dispatch(changeAmountInBasket(id, newAmount)) : dispatch(deleteFromBasket(id));
  }

  return (
    <li className={styles.container}>
      <div className={styles.info}>
        <img className={styles.image} src={image} alt={name} />
        <div className={styles.description}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.details}>
            {`${size.name} ${size.diameter} ${text[language].cm}, ${dough.toLowerCase()} ${text[language].dough}`}
          </p>
          {
            removed.length !== 0 && <p className={styles.details}>{`${text[language].removed}: ${removed.join(', ')}`}</p>
          }
          {
            extra.length !== 0 && <p className={styles.details}>{`${text[language].added}: ${extra.map(v => v.name).join(', ')}`}</p>
          }
        </div>
      </div>
      <div className={styles.actions}>
        <div className={styles.amount}>
          <CounterButton symbol="-" onClick={() => decreaseAmount(item.id)} />
          {item.amount}
          <CounterButton symbol="+" onClick={() => increaseAmount(item.id)} />
        </div>
        <p className={styles.price}>
          {`${totalPizzaPrice} руб.`}
        </p>
        <button className={styles.delete} onClick={() => deleteItem(item.id)}>
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={styles.deleteIcon} d="M14.75 6H5.25L5.90993 15.8047C5.97132 16.8184 6.50848 17.5 7.39863 17.5H12.6014C13.4915 17.5 14.0133 16.8184 14.0901 15.8047L14.75 6Z" fill="#373535"></path>
            <path className={styles.deleteIcon} d="M13.8498 3.00681L6.19643 3.00688C4.98382 2.88702 5.02127 4.36489 5 5L14.9917 4.99999C15.0165 4.38088 15.0624 3.12667 13.8498 3.00681Z" fill="#373535"></path>
          </svg>
        </button>
      </div>
    </li>
  );
};

export default BasketItem;