import { Rate } from './rate';
import Review from './review';

export default function Reviews({ reviews }) {
  const totalRatings = reviews.reduce(
    (totalRating, review) => totalRating + review.rating,
    0
  );

  return (
    <div>
      {reviews.map((review) => (
        <Review key={review.id} review={review} />
      ))}
      <p>Total rating :</p>
      <Rate value={totalRatings / reviews.length} />
    </div>
  );
}
