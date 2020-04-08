import { CHANGE_SELECTED_PIZZA_STATE } from '../actions';

const initialState  = {
  isOpen: false,
  data: {}
};

const selectedPizza = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_PIZZA_STATE:
      return {
        ...state,
        isOpen: action.payload.isOpen,
        data: action.payload.data
      };
    default:
      return state
  }
}

export default selectedPizza;