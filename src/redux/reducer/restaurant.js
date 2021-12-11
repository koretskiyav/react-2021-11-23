// import { restaurant as defaultRestaurants } from '../../fixtures';

export default (restaurants = {}, action) => {
  const { type } = action;

  switch (type) {
    default:
      return restaurants;
  }
};
