import { ADD_REVIEW } from '../constants';
import { arrToMap } from '../utils';
import { normalizedUsers } from '../../fixtures';

export default (state = arrToMap(normalizedUsers), action) => {
  const { type, review, userId } = action;

  switch (type) {
    case ADD_REVIEW:
      const { name } = review;
      return {
        ...state,
        [userId]: { id: userId, name },
      };

    default:
      return state;
  }
};
