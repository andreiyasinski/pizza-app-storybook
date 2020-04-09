import { CHANGE_SELECTED_PIZZA } from '../actions';

const initialState  = {
  data: {}
};

const selectedPizza = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_SELECTED_PIZZA:
      return {
        ...state,
        data: action.payload.data
      };
    default:
      return state
  }
}

export default selectedPizza;