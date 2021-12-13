import { REVIEW_ADD } from '../constants';
import { normalizedRestaurants } from '../../fixtures';

const defaultRestaurants = normalizedRestaurants.reduce(
  (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
  {}
);

export default (restaurants = defaultRestaurants, action) => {
  const { type, data } = action;

  switch (type) {
    case REVIEW_ADD:
      const { review, restaurantId: id } = data;
      return {
        ...restaurants,
        [id]: {
          ...restaurants[id],
          reviews: [...restaurants[id].reviews, review.id],
        },
      };
    default:
      return restaurants;
  }
};
