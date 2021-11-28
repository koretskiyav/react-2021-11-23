import React from 'react';
import Rate from '../rate';

import styles from './review.module.css';

export default ({ id, user, text, rating }) => {
  return (
    <div key={id} className={styles.card}>
      <p className={styles.user}>{user}</p>
      <p className={styles.text}>{text}</p>
      <Rate rating={rating} />
    </div>
  );
};
