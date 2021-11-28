import { useState, useMemo } from 'react';
import Menu from './menu';
import Tabs from './tabs';
import Rate from './rate';
import Reviews from './reviews/reviews';

const DEFAULT_RATING = 3;

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

  const avgRating = useMemo(
    () =>
      activeRestaurant.reviews
        ? Math.round(
            activeRestaurant.reviews
              .map((r) => r.rating)
              .reduce((a, b) => a + b, 0) / activeRestaurant.reviews.length
          )
        : DEFAULT_RATING,
    [activeRestaurant]
  );

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} />
      <span>
        <span>{activeRestaurant.name}</span>
        <Rate rating={avgRating} />
      </span>
      <Menu menu={activeRestaurant.menu} />
      <Reviews reviews={activeRestaurant.reviews} />
    </div>
  );
}
