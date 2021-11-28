import { Component } from 'react';

import styles from './rate.module.css';

import { ReactComponent as Star } from '../../icons/star.svg';

export default class Rate extends Component {
  render() {
    const stars = [];
    for (let i = 0; i < this.props.value; i++) {
      stars.push(<Star key={i} className={styles['rate-item']} />);
    }

    if (stars.length > 5) {
      stars.length = 5;
    }

    return <div className={styles.rate}>{stars}</div>;
  }
}
