import Menu from './menu';
import Reviews from './reviews';
import RestarauntRate from './restaurantRate';

export default function Restaraunt({ menu, reviews }) {
  return (
    <>
      <Menu menu={menu}/>
      <Reviews reviews={reviews}/>
      <RestarauntRate reviews={reviews}/>
    </>
  );
}
