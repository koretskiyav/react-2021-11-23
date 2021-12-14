import { normalizedRestaurants } from '../../fixtures';
import { UPDATE_RESTAURANTS } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, id } = action;

  switch (type) {
    case UPDATE_RESTAURANTS:
      console.log(restaurants)
      return {...restaurants, [[restaurants[action.id]].reviews]: id };

    default:
      return restaurants;
  }
};
