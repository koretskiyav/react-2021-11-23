import { DECREMENT, INCREMENT, REMOVE_ITEM } from '../constants';

// { [productId]: amount }
export default function (state = {}, action) {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: (state[id] || 0) - 1 };
    case REMOVE_ITEM:
      delete state[id];
      return { ...state };
    default:
      return state;
  }
}
