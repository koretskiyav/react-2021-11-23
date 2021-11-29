import React from 'react';
import Menu from '../menu/menu';
import Reviews from '../reviews';
import Rate from '../rate';
import style from './restaurant.module.css';

export default function Restarant({ restarant }) {
  let rating = 0;
  for (let i = restarant.reviews.length - 1; i >= 0; i--) {
    rating += restarant.reviews[i].rating;
  }
  rating /= restarant.reviews.length;
  rating = Math.round(rating);
  return (
    <div>
      <div className={style.section}>
        <p className="subtitle is-4">The rating of restarant:</p>
        <Rate value={rating} />
      </div>
      <div className={style.section}>
        <p className="subtitle is-4">Menu:</p>
        <Menu menu={restarant.menu} />
      </div>

      <div className={style.section}>
        <p className="subtitle is-4">Reviews:</p>
        <Reviews reviews={restarant.reviews} />
      </div>
    </div>
  );
}
