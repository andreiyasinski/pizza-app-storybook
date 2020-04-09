import { CHANGE_POPUP_STATE } from '../actions';

const initialState  = {
  isOpen: false
};

const popUp = (state = initialState, action) => {
  switch (action.type) {
    case CHANGE_POPUP_STATE:
      return {
        ...state,
        isOpen: action.payload.isOpen
      };
    default:
      return state
  }
}

export default popUp;