import { DECREMENT, INCREMENT, REMOVE } from '../constants';

const removeItem = (state, id) => {
  let newState = { ...state };
  delete newState[id];
  return newState;
};

// { [productId]: amount }
export default function (state = {}, action) {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...state, [id]: (state[id] || 0) + 1 };

    case DECREMENT:
      let newAmount = (state[id] || 0) - 1;
      if (newAmount > 0) {
        return { ...state, [id]: newAmount };
      }
      return removeItem(state, id);

    case REMOVE:
      return removeItem(state, id);

    default:
      return state;
  }
}
