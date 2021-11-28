import { Component } from 'react';

import Rate from '../rate';
import Menu from '../menu';
import Reviews from '../reviews';

export default class Restaurant extends Component {
  render() {
    const restaurant = this.props.restaurant;
    const rating = restaurant.reviews.reduce((acc, cur) => {
      const rating = acc + cur.rating;
      return rating;
    }, 0);
    const averageRating = Math.round(rating / restaurant.reviews.length);

    return (
      <div>
        <h1>{restaurant.name}</h1>
        <div className="flex">
          <h2>Средний рейтинг</h2>
          <Rate value={averageRating} />
        </div>
        <Menu menu={restaurant.menu} />
        <Reviews reviews={restaurant.reviews} />
      </div>
    );
  }
}
