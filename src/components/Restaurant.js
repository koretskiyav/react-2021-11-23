import Menu from './menu';
import Reviews from './Reviews';
import Rate from './Rate';

export default function Restaurant({ restaurant }) {
  const getAverageRate = () => {
    let sum = 0;
    return (
      restaurant.reviews.reduce((sum = 0, { rating }) => {
        return sum + rating;
      }, sum) / restaurant.reviews.length
    );
  };

  return (
    <div>
      <p>
        Restaurant rate: <Rate value={getAverageRate()} />
      </p>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}
