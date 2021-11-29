import React from 'react';
import Review from './review/review';

export default function Reviews({ reviews }) {
  return (
    <div>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
    </div>
  );
}
