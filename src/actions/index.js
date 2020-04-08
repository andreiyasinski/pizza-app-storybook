import axios from 'axios';
import { v4 as id } from 'uuid';
import { format } from 'date-fns';

export const GET_PIZZAS_REQUEST = 'GET_PIZZAS_REQUEST';
export const GET_PIZZAS_SUCCESS = 'GET_PIZZAS_SUCCESS';
export const GET_PIZZAS_FAILURE = 'GET_PIZZAS_FAILURE';

export const getPizzasRequest = () => {
  return {
    type: GET_PIZZAS_REQUEST
  }
}

export const getPizzasSuccess = (items) => ({
  type: GET_PIZZAS_SUCCESS,
  payload: {
    items,
  },
});

export const getPizzasFailure = (error) => ({
  type: GET_PIZZAS_FAILURE,
  payload: {
    error,
  },
});

export const getPizzas = () => (dispatch) => {
  dispatch(getPizzasRequest());

  return axios(`${process.env.PUBLIC_URL}/pizzas.json`)
    .then((response) => {
      dispatch(getPizzasSuccess(response.data));
    })
    .catch((err) => {
      dispatch(getPizzasFailure(err));
    });
};

export const GET_INGREDIENTS_REQUEST = 'GET_INGREDIENTS_REQUEST';
export const GET_INGREDIENTS_SUCCESS = 'GET_INGREDIENTS_SUCCESS';
export const GET_INGREDIENTS_FAILURE = 'GET_INGREDIENTS_FAILURE';

export const getIngredientsRequest = () => {
  return {
    type: GET_INGREDIENTS_REQUEST
  }
}

export const getIngredientsSuccess = (items) => ({
  type: GET_INGREDIENTS_SUCCESS,
  payload: {
    items,
  },
});

export const getIngredientsFailure = (error) => ({
  type: GET_INGREDIENTS_FAILURE,
  payload: {
    error,
  },
});

export const getIngredients = () => (dispatch) => {
  dispatch(getIngredientsRequest());

  return axios(`${process.env.PUBLIC_URL}/ingredients.json`)
    .then((response) => {
      dispatch(getIngredientsSuccess(response.data));
    })
    .catch((err) => {
      dispatch(getIngredientsFailure(err));
    });
};

export const TOGGLE_MENU = 'TOGGLE_MENU';

export const toggleMenu = (isMenuOpen) => ({
  type: TOGGLE_MENU,
  payload: {
    isMenuOpen
  },
});

export const CHANGE_SELECTED_PIZZA_STATE = 'CHANGE_SELECTED_PIZZA_STATE';

export const changeSelectedPizzaState = (isOpen, data) => ({
  type: CHANGE_SELECTED_PIZZA_STATE,
  payload: {
    isOpen,
    data
  },
});


export const GET_TYPES_REQUEST = 'GET_TYPES_REQUEST';
export const GET_TYPES_SUCCESS = 'GET_TYPES_SUCCESS';
export const GET_TYPES_FAILURE = 'GET_TYPES_FAILURE';

export const getTypesRequest = () => {
  return {
    type: GET_TYPES_REQUEST
  }
}

export const getTypesSuccess = (items) => ({
  type: GET_TYPES_SUCCESS,
  payload: {
    items,
  },
});

export const getTypesFailure = (error) => ({
  type: GET_TYPES_FAILURE,
  payload: {
    error,
  },
});

export const getTypes = () => (dispatch) => {
  dispatch(getTypesRequest());

  return axios(`${process.env.PUBLIC_URL}/types.json`)
    .then((response) => {
      dispatch(getTypesSuccess(response.data));
    })
    .catch((err) => {
      dispatch(getTypesFailure(err));
    });
};

export const BASKET_ADD = 'BASKET_ADD';
export const BASKET_DELETE = 'BASKET_DELETE';
export const BASKET_CHANGE_AMOUNT = 'BASKET_CHANGE_AMOUNT';
export const BASKET_CLEAR = 'BASKET_CLEAR';

export const addToBasket = (item) => ({
  type: BASKET_ADD,
  payload: {
    id: id(),
    pizza: item,
    amount: 1
  },
});

export const deleteFromBasket = (id) => ({
  type: BASKET_DELETE,
  payload: {
    id
  }
});

export const changeAmountInBasket = (id, value) => ({
  type: BASKET_CHANGE_AMOUNT,
  payload: {
    id,
    value
  }
});

export const clearBasket = () => ({
  type: BASKET_CLEAR
});

export const LANGUAGE_CHANGE = 'LANGUAGE_CHANGE';

export const changeLanguage = (value) => ({
  type: LANGUAGE_CHANGE,
  payload: {
    value
  }
});

export const ORDERS_ADD = 'ORDERS_ADD';

export const makeOrder = (item) => ({
  type: ORDERS_ADD,
  payload: {
    id: id(),
    date: format(new Date(), 'yyyy-MM-dd, HH:mm'),
    item
  },
});

export const CHANGE_NEW_PIZZA_MESSAGE_STATE = 'CHANGE_NEW_PIZZA_MESSAGE_STATE';

export const changeNewPizzaMessageState = (isNewAdded) => ({
  type: CHANGE_NEW_PIZZA_MESSAGE_STATE,
  payload: {
    isNewAdded 
  }
});