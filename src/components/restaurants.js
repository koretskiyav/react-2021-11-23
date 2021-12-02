import { useState, useMemo } from 'react';
import Menu from './menu';
import Tabs from './tabs';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurants({ restaurants }) {
  const [activeId, setActiveId] = useState(restaurants[0].id);

  const tabs = useMemo(
    () => restaurants.map(({ id, name }) => ({ id, label: name })),
    [restaurants]
  );

  const activeRestaurant = useMemo(
    () => restaurants.find((restaurant) => restaurant.id === activeId),
    [activeId, restaurants]
  );

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
}

function Restaurant({restaurant}) {
  const totalReviews = restaurant.reviews.length
  const averageRating = Math.round(restaurant.reviews.map(r => r.rating)
    .reduce((a, b) => a + b) / totalReviews
  )

  return (
    <div>
      <Rate text="Average rating:" value={averageRating}/>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  )
}
