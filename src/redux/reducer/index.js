import { combineReducers } from 'redux';
import order from './order';

export default combineReducers({
  order,
  products: (state = {}) => state,
});
