import { arrToMap } from '../utils';
import { FAILURE, LOAD_PRODUCTS, REQUEST, SUCCESS } from '../constants';

const initialState = {
  entities: {},
  loading: {},
  loaded: {},
  error: {},
};

export default (state = initialState, action) => {
  const { type, id, data, error } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return {
        ...state,
        loading: { ...state.loading, [id]: true },
        error: { ...state.error, [id]: null },
      };
    case LOAD_PRODUCTS + SUCCESS:
      return {
        ...state,
        loading: { ...state.loading, [id]: false },
        loaded: { ...state.loaded, [id]: true },
        entities: { ...state.entities, ...arrToMap(data) },
      };
    case LOAD_PRODUCTS + FAILURE:
      return {
        ...state,
        loading: { ...state.loading, [id]: false },
        loaded: { ...state.loaded, [id]: false },
        error: { ...state.error, [id]: error },
      };
    default:
      return state;
  }
};
