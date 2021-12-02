import { useMemo } from 'react';
import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

function Restaurant({ restaurant: { name, menu, reviews } }) {
  const rating = useMemo(
    () =>
      reviews.map((review) => review.rating).reduce((a, b) => a + b) /
      reviews.length,
    [reviews]
  );

  return (
    <div>
      <h4>{name}</h4>
      <Rate value={rating} />
      <Menu menu={menu} />
      <Reviews reviews={reviews} />
    </div>
  );
}

export default Restaurant;
