import { SET_ACTIVE_RESTAURANT_ID } from '../constants';
import { normalizedRestaurants } from '../../fixtures';

export default (activeRestaurantId = normalizedRestaurants[0].id, action) => {
  const { type, id } = action;

  switch (type) {
    case SET_ACTIVE_RESTAURANT_ID:
      return id;
    default:
      return activeRestaurantId;
  }
};
