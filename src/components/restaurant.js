import React, { useMemo } from 'react';

import Rate from './rate';
import Menu from './menu';
import Reviews from './reviews/reviews';

const DEFAULT_RATING = 3;

export default ({ name, menu, reviews }) => {
  const avgRating = useMemo(
    () =>
      reviews
        ? Math.round(
            reviews.map((r) => r.rating).reduce((a, b) => a + b, 0) /
              reviews.length
          )
        : DEFAULT_RATING,
    [reviews]
  );

  return (
    <div>
      <span>{name}</span>
      <Rate rating={avgRating} />
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
};
