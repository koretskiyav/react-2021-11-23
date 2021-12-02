import { useMemo } from 'react';
import { ReactComponent as Star } from '../icons/star-fill.svg';

import styles from './rate.module.css';

function Rate({ value }) {
  const stars = useMemo(
    () => (value ? Array(Math.round(value)).fill(0) : []),
    [value]
  );

  return (
    <div>
      {stars.map((item, index) => (
        <Star key={index} className={styles.icon} />
      ))}
    </div>
  );
}

export default Rate;
