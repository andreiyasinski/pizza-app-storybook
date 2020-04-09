import React, { useState, useEffect } from 'react';
import styles from './popUpPizza.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { PIZZA_SIZE, PIZZA_DOUGH } from '../../models/models';
import { changeSelectedPizza, addToBasket, changeNewPizzaMessageState, changePopUpState } from '../../actions';
import Ingredient from './ingredient/ingredient.component';
import Button from '../../ui-kit/button/button.component';
import SizeSelector from './sizeSelector/sizeSelector.component';
import DoughSelector from './doughSelector/doughSelector.component';
import Extra from './extra/extra.component';
import { selectedPizzaText as text } from '../../text/text';
import PopUp from '../../ui-kit/popUp/popUp.component';

const PopUpPizza = () => {
  const [removedIngredients, setRemovedIngredients] = useState([]);
  const [size, setSize] = useState(PIZZA_SIZE.SMALL);
  const [duoghType, setDuoghType] = useState(PIZZA_DOUGH.TYPE1);
  const [extra, setExtra] = useState([]);
  const pizza = useSelector(state => state.selectedPizza.data);
  const language = useSelector(state => state.language.value);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    }
  }, [])
  
  const dispatch = useDispatch();
  
  const { id, name, image } = pizza;
  const { price, diameter, weight } = pizza.size[size];
  const selectedDoughType = pizza.dough[duoghType];
  const extraData = pizza.extra;

  const totalPrice = extra.reduce((sum, current) => +sum + +current.price, +price).toFixed(2);
  
  const changeRemovedIngredients = (isSelected, name) => {
    const newRemoved = isSelected ? [...removedIngredients, name] : removedIngredients.filter(v => v !== name);
    setRemovedIngredients(newRemoved);
  }

  const changeSize = (e) => {
    let temp = e.target.value === PIZZA_SIZE.SMALL ? PIZZA_DOUGH.TYPE1 : duoghType;
    setSize(e.target.value);
    setDuoghType(temp);
  }

  const changeDoughType = (e) => {
    setDuoghType(e.target.value);
  }

  const changeExtra = (isSelected, item) => {
    const newExtra = isSelected ? [...extra, item] : extra.filter(v => v.id !== item.id);
    setExtra(newExtra);
  }

  const addPizzaToBasket = () => {
    dispatch(addToBasket({
      id,
      name,
      image,
      size: pizza.size[size],
      dough: selectedDoughType,
      removed: removedIngredients,
      extra,
      price: totalPrice
    }));
    dispatch(changeSelectedPizza({}));
    dispatch(changePopUpState(false));
    dispatch(changeNewPizzaMessageState(true));
  }

  return (
    <PopUp>
      <div className={styles.card}>
        <div className={styles.imageBlock}>
          <img
            src={image}
            className={styles.image}
            alt={name}
          />
        </div>
        <div className={styles.description}>
          <h2 className={styles.title}>{name}</h2>
          <p className={styles.subtitle}>
            {`${diameter} ${text[language].cm}, ${selectedDoughType.toLowerCase()} ${text[language].dough}, ${weight} ${text[language].g}`}
          </p>
          <ul className={styles.list}>
            {
              pizza.ingredients.map( (item, i) => (
                <Ingredient
                  onChange={changeRemovedIngredients}
                  key={item.id}
                  item={item}
                />
              ))
            }
          </ul>
          <SizeSelector
            changeSize={changeSize}
            size={size}
          />
          <DoughSelector
            changeDoughType={changeDoughType}
            duoghType={duoghType}
            size={size}
          />
          <h3 className={styles.addExtraText}>{text[language].add}</h3>
          <ul className={styles.extraList}>
            { extraData.map( item => <Extra item={item} key={item.id} onChange={changeExtra} /> ) }
          </ul>
          <Button onClick={addPizzaToBasket} theme="secondary" className={styles.button}>
            {`${text[language].addToBasket} ${totalPrice} ${text[language].byn}`}
          </Button>
        </div>
      </div>
    </PopUp>
  );
};

export default PopUpPizza;