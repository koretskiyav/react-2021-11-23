import { Rate } from './rate';
import React from 'react';

export default function Review({ review }) {
  return (
    <div>
      <p>{review.text}</p>
      <p>{review.user}</p>
      <Rate value={review.rating} />
    </div>
  );
}
