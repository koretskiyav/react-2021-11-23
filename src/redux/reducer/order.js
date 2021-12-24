import produce from 'immer';

import {
  DECREMENT,
  INCREMENT,
  REMOVE,
  SEND_ORDER,
  REQUEST,
  SUCCESS,
  FAILURE,
} from '../constants';

const initialState = {
  entities: {},
  loading: false,
  loaded: false,
  error: null,
};

export default produce((draft = initialState, action) => {
  const { type, id, error } = action;

  switch (type) {
    case INCREMENT:
      draft.entities[id] = (draft.entities[id] || 0) + 1;
      break;

    case DECREMENT:
      draft.entities[id] =
        draft.entities[id] > 0 ? (draft.entities[id] || 0) - 1 : 0;
      break;

    case REMOVE:
      draft.entities[id] = 0;
      break;

    case SEND_ORDER + REQUEST: {
      draft.loading = true;
      break;
    }
    case SEND_ORDER + SUCCESS: {
      draft.loading = false;
      draft.entities = {};
      break;
    }
    case SEND_ORDER + FAILURE: {
      draft.loading = false;
      draft.error = error;
      break;
    }
    default:
      return draft;
  }
});
