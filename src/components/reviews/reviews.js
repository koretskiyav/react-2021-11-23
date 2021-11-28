import React from 'react';
import Review from '../review/review';

import styles from './reviews.module.css';

export default ({ reviews }) => {
  return (
    <div className={styles.block}>
      <p className={styles.title}>Hey! Check out reviews!</p>
      {reviews.map((review) => (
        <Review key={review.id} {...review} />
      ))}
    </div>
  );
};
