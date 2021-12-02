import { useMemo } from 'react';

import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

const getRate = (reviews) => {
  if (!reviews.length) {
    return 0;
  }

  const rateSum = reviews
    .map((review) => review.rating)
    .reduce((previousValue, currentValue) => previousValue + currentValue, 0);
  
  return Math.round(rateSum/reviews.length);
};

export default function Restaurant({ restaurant }) {
  const commonRate = useMemo(() => getRate(restaurant.reviews), [restaurant]);
  return (
    <div>
      <Menu menu={restaurant.menu} />
      <h3>Rewiews ({commonRate && <Rate value={commonRate}/>})</h3>
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}
