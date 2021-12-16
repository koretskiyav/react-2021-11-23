import produce from 'immer';

import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default function (state = {}, action) {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      // return { ...state, [id]: (state[id] || 0) + 1 };
      return produce(state, (draft) => {
        draft[id] = (draft[id] || 0) + 1;
      });
    case DECREMENT:
      // return { ...state, [id]: state[id] > 0 ? (state[id] || 0) - 1 : 0 };
      return produce(state, (draft) => {
        draft[id] = draft[id] > 0 ? (draft[id] || 0) - 1 : 0;
      });
    case REMOVE:
      // return { ...state, [id]: 0 };
      return produce(state, (draft) => {
        draft[id] = 0;
      });
    default:
      return state;
  }
}
