import { v4 as uuidv4 } from 'uuid';
import { REVIEW_ADD } from '../constants';

export default (store) => (next) => (action) => {
  const { type, data } = action;

  switch (type) {
    case REVIEW_ADD:
      const { review } = data;
      const id = uuidv4();
      const userId = uuidv4();
      
      return next({
        ...action,
        data: { ...data, review: { ...review, id, userId } },
      });
    default:
      return next(action);
  }
};
