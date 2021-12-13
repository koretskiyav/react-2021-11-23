import { v4 as uuid } from 'uuid';

export default (store) => (next) => (action) => {
  if (!action.uuidFor) return next(action);
  const { uuidFor, ...rest } = action;
  next({
    ...rest,
    ...uuidFor.reduce((acc, key) => ({ ...acc, [key]: uuid() }), {}),
  });
};
