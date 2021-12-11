import { combineReducers } from 'redux';
import order from './order';
import restaurants from './restaurants';
import review from './review';
import restaurant from './restaurant';

export default combineReducers({
  order,
  restaurants,
  review,
  restaurant,
});
