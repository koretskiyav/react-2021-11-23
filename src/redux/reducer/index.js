import { combineReducers } from 'redux';
import order from './order';
import restaurants from './restaurants';
import activeRestaurantId from './active-restaurant-id';
import products from './products';
import reviews from './reviews';
import users from './users';

export default combineReducers({
  order,
  restaurants,
  activeRestaurantId,
  products,
  reviews,
  users,
});
