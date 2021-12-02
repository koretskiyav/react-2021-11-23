import Rate from './rate';

function Reviews({ reviews }) {
  return (
    <div>
      {reviews.map((review) => (
        <div key={review.id} className="card">
          <h6>{review.user}</h6>
          <Rate value={review.rating}/>
          <p>{review.text}</p>
        </div>
      ))}
    </div>
  );
}

export default Reviews;
