import { normalizedUsers } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultUsers = normalizedUsers.reduce((acc, user) => ({
  ...acc,
  [user.id]: user,
}));

export default (users = defaultUsers, action) => {
  const { type, data } = action;
  switch (type) {
    case ADD_REVIEW:
      return { ...users, [data.userId]: { id: data.userId, name: data.name } };
    default:
      return users;
  }
};
