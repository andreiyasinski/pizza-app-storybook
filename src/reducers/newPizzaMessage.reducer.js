import { CHANGE_NEW_PIZZA_MESSAGE_STATE } from '../actions';

const initialState  = {
  isNewAdded: false
};

const newPizzaMessage = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_NEW_PIZZA_MESSAGE_STATE:
      return {
        ...state,
        isNewAdded: action.payload.isNewAdded,
      };
    default:
      return state
  }
}

export default newPizzaMessage;