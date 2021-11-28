import Menu from "./menu";
import Rate from "./rate";
import Reviews from "./reviews";

export default function Restaurant({ restaurant }) {
  
  const reviewsCount = restaurant.reviews.length;
  const rating =
    Math.round(
      restaurant.reviews.reduce(
      (previousSum, newReview) => previousSum + newReview.rating / reviewsCount, 0
    )
  );
  
  return (
    <div key={restaurant.id}>
      <p>{restaurant.name}</p>
      <Rate value={getValidRating(rating)} />
      <Menu menu={restaurant.menu} />
      <Reviews reviews={restaurant.reviews} />
    </div>
  );
}

function getValidRating(rating) {
  let MAX_RATING = 5;
  let MIN_RATING = 0;
  if (rating > MAX_RATING) {
    return MAX_RATING;
  }
  if (rating < MIN_RATING) {
    return MIN_RATING;
  }
  return rating;
}