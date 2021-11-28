import Rate from './rate';

import styles from './review.module.css';

export default function Review({ review }) {

  return (
    <div className={styles.reviewWrapper}>
      <p className={styles.reviewName}>{review.user}:</p>
      <p className={styles.reviewText}>{review.text}</p>
      <Rate rating={review.rating}/>
    </div>
  );
}
