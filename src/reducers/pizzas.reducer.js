import {
  GET_PIZZAS_REQUEST,
  GET_PIZZAS_SUCCESS,
  GET_PIZZAS_FAILURE
} from '../actions';

const initialState  = {
  items: {
    ru: [],
    en: []
  },
  isFetching: false,
  error: null,
};

const pizzas = (state = initialState, action) => {
  switch (action.type) {
    case GET_PIZZAS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_PIZZAS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.payload.items,
      };
    case GET_PIZZAS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
    default:
      return state
  }
}

export default pizzas;