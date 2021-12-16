import produce from 'immer';

import { arrToMap } from '../utils';
import { LOAD_PRODUCTS, REQUEST, SUCCESS, FAILURE } from '../constants';

const initialState = {
  entities: {},
  loading: {},
  loaded: {},
  error: null,
};

export default (state = initialState, action) => {
  const { type, restId, data, error } = action;

  switch (type) {
    case LOAD_PRODUCTS + REQUEST:
      return produce(state, (draft) => {
        draft.loading[restId] = true;
        draft.error = null;
      });
    case LOAD_PRODUCTS + SUCCESS:
      return produce(state, (draft) => {
        draft.loading[restId] = false;
        draft.loaded[restId] = true;
        draft.error = null;
        Object.assign(draft.entities, arrToMap(data));
      });
    case LOAD_PRODUCTS + FAILURE:
      return produce(state, (draft) => {
        draft.loading[restId] = false;
        draft.loaded[restId] = false;
        draft.error = error;
      });
    default:
      return state;
  }
};
