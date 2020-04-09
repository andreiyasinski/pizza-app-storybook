import { combineReducers } from 'redux';
import pizzas from './pizzas.reducer';
import ingredients from './ingredients.reducer';
import menu from './menu.reducer';
import selectedPizza from './selectedPizza.reducer';
import types from './types.reducer';
import basket from './basket.reducer';
import language from './language.reducer';
import orders from './orders.reducer';
import newPizzaMessage from './newPizzaMessage.reducer';
import popUp from './popUp.reducer';

const mainReducer = combineReducers({
  pizzas,
  ingredients,
  menu,
  selectedPizza,
  types,
  basket,
  language,
  orders,
  newPizzaMessage,
  popUp
})

export default mainReducer;