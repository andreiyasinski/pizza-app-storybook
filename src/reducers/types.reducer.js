import {
  GET_TYPES_REQUEST,
  GET_TYPES_SUCCESS,
  GET_TYPES_FAILURE
} from '../actions';

const initialState  = {
  items: {
    ru: [],
    en: []
  },
  isFetching: false,
  error: null,
};

const types = (state = initialState, action) => {
  switch (action.type) {
    case GET_TYPES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };
    case GET_TYPES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        items: action.payload.items,
      };
    case GET_TYPES_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.payload.error,
      };
    default:
      return state
  }
}

export default types;