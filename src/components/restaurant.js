import Menu from './menu';
import Review from './reviews';

export default function Restaurant({ restaurant }) {
  
  return (
    <div>
      <span>Menu</span>
      <Menu menu={restaurant.menu} />
      <span>Reviews</span>
      <Review review={restaurant.reviews} />
    </div>
  );
}