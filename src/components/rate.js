import styles from './rate.module.css';

import { ReactComponent as Star } from '../icons/star.svg';

const VALUES = new Set([1,2,3,4,5]);

function Rate({ value }) {
  if (!VALUES.has(value)) {
    throw new Error('Bad value for rate');
  }
  return (
    <div className={styles.rate}>
        {Array.from(new Array(value)).map((_, i) => <Star className={styles['rate-item']} key={i} />)}
    </div>
  );
}

export default Rate;
