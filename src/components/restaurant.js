import React from 'react';
import { useMemo } from 'react';

import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';

export default function Restaurant({ restaurant }) {
  const averageRating = useMemo(
      () => Math.floor(restaurant.reviews.reduce(
      (summury, review) => summury + review.rating / restaurant.reviews.length, 0)),
      [restaurant.reviews]
  );

  return (
    <div key={restaurant.id}>
      <h1>{restaurant.name}</h1>
      <Rate value={averageRating} />
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}
