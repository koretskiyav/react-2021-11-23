import Menu from './menu';
import Rate from './rate';
import Reviews from './reviews';
import { useMemo } from 'react';

export default function Restaurant( {restaurant} ) {
  const averageRate = useMemo((
    () => Math.round(restaurant.reviews.map(( r ) => (r.rating))
                        .reduce((a,b) => a + b, 0) / restaurant.reviews.length)
    ),
    [restaurant.reviews]
  );

  return (
    <div>
      <h2>{restaurant.name} menu</h2>
      <p>Average rate:</p><Rate value={averageRate}/>
      <Menu menu={restaurant.menu} />
      <h2>Reviews</h2>
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}
