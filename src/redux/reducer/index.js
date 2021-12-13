import { combineReducers } from 'redux';
import order from './order';
import products from './products';
import restaurants from './restaurants';
import reviews from './reviews';
import users from './users';

export default combineReducers({
  order,
  restaurants,
  products,
  reviews,
  users,
});
