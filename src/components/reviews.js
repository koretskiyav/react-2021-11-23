import Rate from './rate';

import '../assets/css/reviews.css'

export default function Reviews({ reviews }) {
  return (
    <ul className="reviews">
      {reviews.map((item) => (
        <li key={item.id} className="reviews__item">
          <h4 className="reviews__title">{item.user}</h4>
          <p className="reviews__title">{item.text}</p>
          <Rate value={item.rating} />
        </li>
      ))}
    </ul>
  );
}
