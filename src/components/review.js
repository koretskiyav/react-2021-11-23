import styles from './review.module.css';
import Rate from './rate';

export default function Review({ props }) {
  const review = props;
  return (
    <div className={styles.card}>
      <p>
        {review.user} <Rate value={review.rating} />
      </p>

      <p>{review.text} $</p>
    </div>
  );
}
