import { DECREMENT, INCREMENT, REMOVE } from '../constants';

// { [productId]: amount }
export default function (order = {}, action) {
  const { type, id } = action;
  switch (type) {
    case INCREMENT:
      return { ...order, [id]: (order[id] || 0) + 1 };
    case DECREMENT:
      return { ...order, [id]: order[id] > 0 ? (order[id] || 0) - 1 : 0 };
    case REMOVE:
      return { ...order, [id]: 0 };
    default:
      return order;
  }
}
