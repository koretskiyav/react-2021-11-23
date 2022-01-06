import { arrToMap } from '../utils';
import { normalizedProducts } from '../../fixtures';

export default (state = arrToMap(normalizedProducts), action) => {
  const { type } = action;

  switch (type) {
    default:
      return state;
  }
};
