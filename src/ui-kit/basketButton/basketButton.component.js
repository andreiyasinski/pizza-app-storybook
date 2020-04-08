import React, { useEffect } from 'react';
import styles from './basketButton.module.css';
import { useSelector, useDispatch } from 'react-redux';
import cn from 'classnames';
import { changeNewPizzaMessageState } from '../../actions';
import { basketButtonText as text } from '../../text/text';

const BasketButton = ({ amount }) => {
  const isNewAdded = useSelector(state => state.newPizzaMessage.isNewAdded);
  const language = useSelector(state => state.language.value);

  const dispatch = useDispatch();

  useEffect(()=> {
    const timer = setTimeout(() => {
      dispatch(changeNewPizzaMessageState(false));
    }, 2000);
    return () => clearTimeout(timer);
  }, [dispatch, amount])

  return (
    <button className={styles.container}>
      <svg  className={styles.icon} width="20" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="shopping-basket" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
        <path fill="currentColor" d="M576 216v16c0 13.255-10.745 24-24 24h-8l-26.113 182.788C514.509 462.435 494.257 480 470.37 480H105.63c-23.887 0-44.139-17.565-47.518-41.212L32 256h-8c-13.255 0-24-10.745-24-24v-16c0-13.255 10.745-24 24-24h67.341l106.78-146.821c10.395-14.292 30.407-17.453 44.701-7.058 14.293 10.395 17.453 30.408 7.058 44.701L170.477 192h235.046L326.12 82.821c-10.395-14.292-7.234-34.306 7.059-44.701 14.291-10.395 34.306-7.235 44.701 7.058L484.659 192H552c13.255 0 24 10.745 24 24zM312 392V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24zm112 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24zm-224 0V280c0-13.255-10.745-24-24-24s-24 10.745-24 24v112c0 13.255 10.745 24 24 24s24-10.745 24-24z">
        </path>
      </svg>
      <p className={styles.amount}>{amount}</p>
      <div className={cn(styles.message, {
        [styles.messageActive]: isNewAdded
      })}>
        {text[language].added}
      </div>
    </button>
  );
};

export default BasketButton;