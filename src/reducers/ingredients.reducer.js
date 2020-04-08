import { 
  GET_INGREDIENTS_REQUEST,
  GET_INGREDIENTS_SUCCESS,
  GET_INGREDIENTS_FAILURE
} from '../actions';

const initialState  = {
  items: {
    ru: [],
    en: []
  },
  isFetching: false,
  error: null,
};

const ingredients = (state = initialState, action) => {
  switch (action.type) {
    case GET_INGREDIENTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_INGREDIENTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.payload.items,
      };
    case GET_INGREDIENTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
    default:
      return state
  }
}

export default ingredients;