import { TOGGLE_MENU } from '../actions';

const initialState  = {
  isMenuOpen: false
};

const menu = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_MENU:
      return {
        ...state,
        isMenuOpen: action.payload.isMenuOpen,
      };
    default:
      return state
  }
}

export default menu;