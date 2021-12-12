import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, data } = action;

  switch (type) {
    case ADD_REVIEW:
      const restaurant = restaurants[data.restaurantId];
      return {
        ...restaurants,
        [restaurant.id]: {
          ...restaurant,
          reviews: [...restaurant.reviews, data.reviewId],
        },
      };
    default:
      return restaurants;
  }
};
