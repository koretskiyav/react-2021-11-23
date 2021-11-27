import React from 'react';
import Rate from './rate';

export default function Reviews({ reviews }) {
  return (
    <ul>
      {reviews.map((review) => (
        <li key={review.id}>
          <h3>{review.user}</h3>
          <p>{review.text}</p>
          <Rate value={review.rating} />
        </li>
      ))}
    </ul>
  );
}
