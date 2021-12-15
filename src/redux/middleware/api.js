import { FAILURE, REQUEST, SUCCESS } from '../constants';

export default (store) => (next) => async (action) => {
  if (!action.CallAPI) return next(action);

  const { CallAPI, type, queryParams, ...rest } = action;

  next({ ...rest, type: type + REQUEST, ...queryParams });

  try {
    const params = queryParams ? `?${new URLSearchParams(queryParams)}` : '';
    const data = await fetch(CallAPI + params).then((res) => res.json());
    next({ ...rest, type: type + SUCCESS, data, ...queryParams });
  } catch (error) {
    next({ ...rest, type: type + FAILURE, error, ...queryParams });
  }
};
