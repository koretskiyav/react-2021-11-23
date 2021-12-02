import { useState, useMemo } from 'react';
import Menu from './menu';
import Tabs from './tabs';
import Reviews from './reviews';
import Rate from './rate';

import '../assets/css/restourant.css'

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

  const rateCount = activeRestaurant.reviews.reduce((sum, current) => {
    return sum + current.rating
  }, 0)

  const middleRateCount = Math.floor(rateCount / activeRestaurant.reviews.length)

  return (
    <>
      <Tabs tabs={tabs} onChange={setActiveId} />
      <div className="restourant">
          <div className="restourant__header">
            <h1 className="restourant__title">{activeRestaurant.name}</h1>
            <Rate value={middleRateCount} />
          </div>
        <Menu menu={activeRestaurant.menu} />
        <Reviews reviews={activeRestaurant.reviews}/>
      </div>
    </>
  );
}
