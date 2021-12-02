import Menu from './menu';
import React from 'react';
import Reviews from './reviews';

export default function Restaurant({ restaurant }) {
  return (
    <div>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}
