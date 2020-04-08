import {
  BASKET_ADD,
  BASKET_DELETE,
  BASKET_CHANGE_AMOUNT,
  BASKET_CLEAR
} from '../actions';

const initialState  = [];

const basket = (state = initialState, action) => {
  switch (action.type) {
    case BASKET_ADD:
      return [
        ...state,
        action.payload,
      ];
    case BASKET_DELETE:
      return state.filter(record => record.id !== action.payload.id);
    case BASKET_CHANGE_AMOUNT:
      return state.map(record => (
        record.id === action.payload.id
        ?
        {...record, amount: action.payload.value}
        :
        record
      ))
    case BASKET_CLEAR:
    return [];
    default:
      return state
  }
}

export default basket;