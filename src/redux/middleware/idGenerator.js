import { v4 as uuidv4 } from 'uuid';
import { ADD_REVIEW } from '../constants';

export default (store) => (next) => (action) => {
  const { type, data } = action;
  switch (type) {
    case ADD_REVIEW:
      next({
        ...action,
        type,
        data: { ...data, userId: uuidv4(), reviewId: uuidv4() },
      });
      break;
    default:
      next(action);
  }
};
