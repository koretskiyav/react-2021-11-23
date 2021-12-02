import Rate from './rate';

import styles from './reviews.module.css';

export default function Reviews({reviews}) {
  const reviewsList = reviews.map((review) => (
    <Review key={review.id} review={review} />
  ))

  return (
    <div>
      {reviewsList}
    </div>
  )
}

function Review({review}) {
  return (
    <div className={styles.review}>
      <p>{review.user}</p>
      <p>{review.text}</p>
      <Rate text="Rating:" value={review.rating}/>
    </div>
  )
}