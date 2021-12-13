import { normalizedRestaurants } from '../../fixtures';
import { REVIEWADD } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({...acc, [restaurant.id]: restaurant}),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, value } = action;

  switch (type) {
    case REVIEWADD:
      console.log('action', action);
      return console.log('1111',{ ...restaurants, [value.id]: '34345'});
    default:
      return restaurants;
  }
};
