import { REVIEW_ADD } from '../constants';
import { normalizedReviews } from '../../fixtures';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, data } = action;

  switch (type) {
    case REVIEW_ADD:
      const { review } = data;
      return { ...reviews, [review.id]: review };
    default:
      return reviews;
  }
};
