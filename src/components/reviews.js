import Rate from './rate/rate';

export default function Reviews({ reviews }) {
  return (
    <div>
      <h4>Отзывы:</h4>
      {reviews.map(reviews => (
        <div key={reviews.id}>
          <p>{reviews.user}</p>
          <p>{reviews.text}</p>
          <Rate value={reviews.rating}/>
        </div>
      ))}
    </div>
  )
}