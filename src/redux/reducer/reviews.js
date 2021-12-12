import { normalizedReviews } from '../../fixtures';
import { ADD_REVIEW } from '../constants';

const defaultReviews = normalizedReviews.reduce(
  (acc, review) => ({
    ...acc,
    [review.id]: review,
  }),
  {}
);

export default (reviews = defaultReviews, action) => {
  const { type, data } = action;
  switch (type) {
    case ADD_REVIEW:
      return {
        ...reviews,
        [data.reviewId]: {
          id: data.reviewId,
          text: data.text,
          rating: data.rating,
          userId: data.userId,
        },
      };
    default:
      return reviews;
  }
};
