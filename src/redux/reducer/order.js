import { DECREMENT, INCREMENT } from '../constants';

// { [productId]: amount }
export default function (state = {}, action) {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: Math.max((state[id] || 0) - 1, 0) };
    default:
      return state;
  }
}