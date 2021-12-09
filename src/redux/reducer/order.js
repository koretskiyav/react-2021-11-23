import { DECREMENT, INCREMENT, DELETE } from '../constants';

// { [productId]: amount }
export default function (state = {}, action) {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };
    case DECREMENT:
      return { ...state, [id]: (state[id] || 0) - 1 };
    case DELETE:
      return Object.fromEntries(Object.entries(state).filter(([key]) => key !== id) )
    default:
      return state;
  }
}
