import Menu from "./menu";
import Reviews from "./reviews";
import RestaurantRating from '../hocs/restaurant-rating';
import Rate from "./rate";


const Restaurant = ({ menu, reviews, averageRating }) => (
    <>
        <p>
            Средний рейтинг: <Rate value={averageRating} />
        </p>
        <Reviews reviews={reviews} />
        <Menu menu={menu} />
    </>
);

export default RestaurantRating(Restaurant);
