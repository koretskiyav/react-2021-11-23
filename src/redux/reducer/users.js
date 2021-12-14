import { normalizedUsers } from '../../fixtures';
import { ADD_USER } from '../constants';

const defaultUsers = normalizedUsers.reduce(
  (acc, user) => ({ ...acc, [user.id]: user }),
  {}
);

export default (users = defaultUsers, action) => {
  const { type, id } = action;

  switch (type) {
    case ADD_USER:
      return { ...users, [action.user['id']]: action.user };
    default:
      return users;
  }
};
