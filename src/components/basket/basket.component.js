import React, { useState } from 'react';
import styles from './basket.module.css';
import { useSelector, useDispatch } from 'react-redux';
import BasketItem from './basketItem/basketItem.component';
import Button from '../../ui-kit/button/button.component';
import { Link } from 'react-router-dom';
import { basketText as text } from '../../text/text';
import complite from '../../assets/complite.png';
import { makeOrder, clearBasket } from '../../actions';
import OrderItem from './orderItem/orderItem.component';

const Basket = () => {
  const [isOrdered, setIsOrdered] = useState(false); 

  const basket = useSelector(state => state.basket);
  const language = useSelector(state => state.language.value);
  const totalOrderPrice = basket.reduce((sum, current) => (
    sum + +current.pizza.price * current.amount
  ), 0).toFixed(2);
  const orders = useSelector(state => state.orders);

  const dispatch = useDispatch();

  const order = () => {
    setIsOrdered(true);
    dispatch(clearBasket());
    dispatch(makeOrder(basket))
  }

  const closePopUp = (e) => {
    if (e.target === e.currentTarget) {
      setIsOrdered(false)
    }
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{text[language].basket}</h1>
      {
        basket.length ?
        <ul className={styles.list}>
          {
            basket.map(item => (
              <BasketItem key={item.id} item={item} />
            ))
          }
        </ul>
        :
        <p>{text[language].add}</p>
      }
      <p className={styles.total}> 
        {`${text[language].total}: ${totalOrderPrice} ${text[language].byn}`}
      </p>
      <div className={styles.bottom}>
        <Link to="/" className={styles.link} tabIndex="-1">
          <Button theme="secondary" className={styles.back}>{text[language].back}</Button>
        </Link>
        <Button
          theme="secondary"
          className={styles.button}
          isDisabled={!basket.length}
          onClick={order}
        >
          {text[language].order}
        </Button>
      </div>

      {
        orders.length !== 0 &&
        <div className={styles.orders}>
          <h2 className={styles.ordersTitle}>{`${text[language].orders}:`}</h2>
          <ul className={styles.list}>
            {
              orders.map(order => (
                <OrderItem key={order.id} order={order} />
              ))
            }
          </ul>
        </div>
      }

      { isOrdered &&
        <div
          className={styles.compliteWrapper}
          onClick={closePopUp}
        >
          <div className={styles.complite}>
            <img src={complite} className={styles.compliteImg} alt="complite" />
            <h2 className={styles.compliteTitle}>{text[language].compliteTitle}</h2>
            <p>{text[language].compliteSubtitle}</p>
            <svg onClick={() => setIsOrdered(false)} className={styles.closeIcon} width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" clipRule="evenodd" d="M9.84606 12.4986L0.552631 3.20519C-0.1806 2.47196 -0.1806 1.28315 0.552631 0.549923C1.28586 -0.183308 2.47466 -0.183308 3.20789 0.549923L12.5013 9.84335L21.792 0.552631C22.5253 -0.1806 23.7141 -0.1806 24.4473 0.552631C25.1805 1.28586 25.1805 2.47466 24.4473 3.20789L15.1566 12.4986L24.45 21.792C25.1832 22.5253 25.1832 23.7141 24.45 24.4473C23.7168 25.1805 22.528 25.1805 21.7947 24.4473L12.5013 15.1539L3.20519 24.45C2.47196 25.1832 1.28315 25.1832 0.549923 24.45C-0.183308 23.7168 -0.183308 22.528 0.549923 21.7947L9.84606 12.4986Z" fill="white"></path>
            </svg>
          </div>
        </div>
      }
    </div>
  );
};

export default Basket;