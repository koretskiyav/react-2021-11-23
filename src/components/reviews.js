import styles from '../css/review.module.css';

import Rate from './rate';

export default function Review({ review }) {
  
  return (
    <div> 
        {review.map((reviewItem) => (
          <div key={reviewItem.id} className={styles.card}>
            <p>{reviewItem.user}</p>
            <p>{reviewItem.text}</p>
            <Rate value={reviewItem.rating} />                       
          </div>
        ))}
      </div>
  );
}