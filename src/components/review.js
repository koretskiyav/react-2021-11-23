import Rate from './rate';
import styles from './review.module.css';

export default function Review({ user, text, rating }) {
  return (
    <div className={styles.card}>
      <p><b>{user}</b></p>
      <p>{text}</p>
      <Rate value={rating}/>
    </div>
  );
}