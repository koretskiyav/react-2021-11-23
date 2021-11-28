import { Component } from 'react';

import styles from './reviews.module.css';

import Review from '../review';

export default class Reviews extends Component {
  render() {
    return (
      <div className={styles.reviews}>
        <h3>Отзывы</h3>
        {this.props.reviews.map((review) => (
          <Review key={review.id} review={review} />
        ))}
      </div>
    );
  }
}
