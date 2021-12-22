import {
  CREATE_ORDER,
  DECREMENT,
  FAILURE,
  INCREMENT,
  REMOVE,
  REQUEST,
  SUCCESS,
} from '../constants';

const initialState = {
  sendingToServer: false,
  error: null,
  cart: {
    // [productId]: amount,
  },
};

export default function (state = initialState, action) {
  const { type, id, error } = action;
  const { cart } = state;
  switch (type) {
    case INCREMENT:
      return {
        ...state,
        cart: { ...cart, [id]: (cart[id] || 0) + 1 },
      };
    case DECREMENT:
      return {
        ...state,
        cart: {
          ...cart,
          [id]: cart[id] > 0 ? (cart[id] || 0) - 1 : 0,
        },
      };
    case REMOVE:
      return { ...state, cart: { ...cart, [id]: 0 } };
    case CREATE_ORDER + REQUEST:
      return { ...state, sendingToServer: true, error: null };
    case CREATE_ORDER + SUCCESS:
      return { ...state, cart: {}, sendingToServer: false, error: null };
    case CREATE_ORDER + FAILURE:
      return { ...state, sendingToServer: false, error };
    default:
      return state;
  }
}
