import { REVIEW_ADD } from '../constants';
import { normalizedUsers } from '../../fixtures';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, data } = action;

  switch (type) {
    case REVIEW_ADD:
      const { review, userName } = data;
      return {
        ...users,
        [review.userId]: { id: review.userId, name: userName },
      };
    default:
      return users;
  }
};
