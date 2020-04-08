import { ORDERS_ADD } from '../actions';

const initialState  = [];

const orders = (state = initialState, action) => {
  switch (action.type) {
    case ORDERS_ADD:
      return [
        ...state,
        action.payload,
      ];
    default:
      return state
  }
}

export default orders;