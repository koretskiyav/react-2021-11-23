import { normalizedRestaurants } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, restaurantId, reviewId } = action;

  switch (type) {
    case ADD_REVIEW:
      const restaurant = restaurants[restaurantId];
      return {
        ...restaurants,
        [restaurantId]: {
          ...restaurant,
          reviews: [...restaurant.reviews, reviewId],
        },
      };

    default:
      return restaurants;
  }
};
