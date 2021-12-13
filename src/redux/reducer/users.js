import { normalizedUsers } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, review, userId } = action;

  switch (type) {
    case ADD_REVIEW:
      const { name } = review;
      return {
        ...users,
        [userId]: { id: userId, name },
      };

    default:
      return users;
  }
};
