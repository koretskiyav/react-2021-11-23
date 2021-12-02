import Rate from './rate';

import style from './review.module.css';

export default function Reviews({ reviews }) {
  return (
    <div>
      {reviews.map(({id, user, text, rating}) => (
        <div className={style.review} key={id}>
          <div>
            {user}{'\u00A0'}
            <Rate value={rating} />
          </div>
          <div className={style['review-text']}>{text}</div>
        </div>
      ))}
    </div>
  );
}
