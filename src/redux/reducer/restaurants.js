import produce from 'immer';
import {
  ADD_REVIEW,
  CHANGE_RESTAURANT,
  FAILURE,
  LOAD_RESTAURANTS,
  REQUEST,
  SUCCESS,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  activeId: null,
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default (state = initialState, action) => {
  const { type, restId, reviewId, activeId, data, error } = action;

  switch (type) {
    case CHANGE_RESTAURANT:
      // return { ...state, activeId };
      return produce(state, (draft) => {
        draft.activeId = activeId;
      });
    case LOAD_RESTAURANTS + REQUEST:
      // return { ...state, loading: true, error: null };
      return produce(state, (draft) => {
        draft.loading = true;
        draft.error = null;
      });
    case LOAD_RESTAURANTS + SUCCESS:
      /*return {
        ...state,
        activeId: data[0].id,
        entities: arrToMap(data),
        loading: false,
        loaded: true,
      };*/
      return produce(state, (draft) => {
        draft.activeId = data[0].id;
        draft.entities = arrToMap(data);
        draft.loading = false;
        draft.loaded = true;
      });
    case LOAD_RESTAURANTS + FAILURE:
      /*return {
        ...state,
        loading: false,
        loaded: false,
        error,
      };*/
      return produce(state, (draft) => {
        draft.loading = false;
        draft.loaded = false;
        draft.error = error;
      });
    case ADD_REVIEW:
      return produce(state, (draft) => {
        draft.entities[restId].reviews.push(reviewId);
      });
    default:
      return state;
  }
};
