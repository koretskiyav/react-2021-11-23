import produce from 'immer';

import {
  ADD_REVIEW,
  REQUEST,
  SUCCESS,
  FAILURE,
  LOAD_REVIEWS,
} from '../constants';
import { arrToMap } from '../utils';

const initialState = {
  entities: {},
  loading: {},
  loaded: {},
  error: null,
};

export default (state = initialState, action) => {
  const { type, review, reviewId, userId, restId, data, error } = action;

  switch (type) {
    case LOAD_REVIEWS + REQUEST:
      return produce(state, (draft) => {
        draft.error = null;
        draft.loading[restId] = true;
      });

    case LOAD_REVIEWS + SUCCESS:
      return produce(state, (draft) => {
        draft.loading[restId] = false;
        draft.loaded[restId] = true;
        Object.assign(draft.entities, arrToMap(data));
      });

    case LOAD_REVIEWS + FAILURE:
      return produce(state, (draft) => {
        draft.loading[restId] = false;
        draft.loaded[restId] = false;
        draft.error = error;
      });

    case ADD_REVIEW:
      const { text, rating } = review;
      return produce(state, (draft) => {
        draft[reviewId] = {
          id: reviewId,
          userId,
          text,
          rating,
        };
      });

    default:
      return state;
  }
};
