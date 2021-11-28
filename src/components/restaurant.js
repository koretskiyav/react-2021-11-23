import Menu from './menu';
import Reviews from './reviews';

export default function Restaurant({ restaurant }) {
  const averageRating =
    restaurant.reviews.reduce((accumulator, review) => {
      return accumulator + review.rating;
    }, 0) / restaurant.reviews.length;

  console.log(averageRating);

  return (
    <div>
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}
