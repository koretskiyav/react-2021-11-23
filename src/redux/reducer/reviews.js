import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({ ...acc, [review.id]: review }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, userId, reviewId, review } = action;

  switch (type) {
    case ADD_REVIEW:
      const { text, rating } = review;
      return {
        ...reviews,
        [reviewId]: { userId, id: reviewId, text, rating },
      };

    default:
      return reviews;
  }
};
