import { ADD_REVIEW } from '../constants';
import { arrToMap } from '../utils';
import { normalizedRestaurants } from '../../fixtures';

export default (state = arrToMap(normalizedRestaurants), action) => {
  const { type, restId, reviewId } = action;

  switch (type) {
    case ADD_REVIEW:
      const restaurant = state[restId];
      return {
        ...state,
        [restId]: {
          ...restaurant,
          reviews: [...restaurant.reviews, reviewId],
        },
      };

    default:
      return state;
  }
};
