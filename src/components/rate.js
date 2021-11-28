import { ReactComponent as Star } from '../icons/star.svg';

import styles from './rate.module.css';

export default function Rate({ rating }) {

  return (
    <div className={styles.rateWrapper}>
      {[...Array(rating).keys()].map((id) => <div key={id} className={styles.star}><Star/></div>)}
    </div>
  );
}
