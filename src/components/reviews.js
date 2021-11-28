import Rate from './rate';
import styles from './reviews.module.css';

export default function Reviews({ reviews }) {
  return (
    <div>
      <p>Reviews</p>
      {
      reviews.map((review) => (
      <div key={review.id} className={styles.card}>
      <p>{review.user}</p>
      <p>{review.text}</p>
      <Rate value={review.rating} />
      </div>
      ))
      }
    </div>
  );
}