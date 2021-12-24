import { FAILURE, REQUEST, SUCCESS } from '../constants';

const DEFAULT_METHOD = 'GET';

export default (store) => (next) => async (action) => {
  if (!action.CallAPI) return next(action);

  const { CallAPI, type, method, body, ...rest } = action;

  next({ ...rest, type: type + REQUEST });
  try {
    const response = await fetch(CallAPI, {
      method: method || DEFAULT_METHOD,
      body: JSON.stringify(body) || null,
      headers: { 'Content-Type': 'application/json' },
    });
    const data = await response.json();
    if (!response.ok) throw data;
    next({ ...rest, type: type + SUCCESS, data });
  } catch (error) {
    throw next({ ...rest, type: type + FAILURE, error });
  }
};
