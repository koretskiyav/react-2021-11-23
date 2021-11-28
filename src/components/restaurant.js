import Menu from './menu';
import Reviews from './reviews';
import Rate from './rate/rate';

export default function Restaurant({ menu, reviews }) {

  const avgRating = () => {
    let val = 0
    reviews.map(item => {
      val = val + item.rating
    })
    return Math.floor(val / reviews.length);
  }

  return (
    <div>
      <div>
        <h4>Средний рейтинг: </h4>
        <Rate value={avgRating()}/>
      </div>

      <h4>Меню: </h4>
      <Menu menu={menu}/>

      <Reviews reviews={reviews}/>
    </div>
  )
}