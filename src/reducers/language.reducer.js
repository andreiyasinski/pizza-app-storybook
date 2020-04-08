import { LANGUAGE_CHANGE } from '../actions';

const initialState  = {
  value: "en" 
};

const language = (state = initialState, action) => {
  switch (action.type) {
    case LANGUAGE_CHANGE:
      return {
        ...state,
        value: action.payload.value
      };
    default:
      return state
  }
}

export default language;