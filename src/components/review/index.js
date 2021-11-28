import { Component } from 'react';

import styles from './review.module.css';

import Rate from '../rate';

export default class Review extends Component {
  render() {
    return (
      <div className={styles.review}>
        <Rate value={this.props.review.rating} />
        <h5>{this.props.review.user}</h5>
        <p>{this.props.review.text}</p>
      </div>
    );
  }
}
