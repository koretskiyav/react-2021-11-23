import Review from './review';

export default function Reviews({ props }) {
  const reviews = props;
  return (
    <div>
      {reviews.map((review) => (
        <Review key={review.id} props={review} />
      ))}
    </div>
  );
}
