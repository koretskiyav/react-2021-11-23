// import { normalizedReviews as defaultReviews } from '../../fixtures';

export default (reviews = {}, action) => {
  const { type } = action;

  switch (type) {
    default:
      return reviews;
  }
};
