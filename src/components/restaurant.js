import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate';

export default function Restaurant({ restaurant }) {
  const avgRating = Math.round(
    restaurant.reviews.map((review) => review.rating).reduce((a, b) => a + b) /
      restaurant.reviews.length
  );

  return (
    <div>
      <p style={{ fontWeight: 'bold', fontSize: '2.5em' }}>
        {restaurant.name} Menu
      </p>
      <Rate value={avgRating} />
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}
