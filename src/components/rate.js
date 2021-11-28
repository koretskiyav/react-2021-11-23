import { ReactComponent as Star } from '../icons/star.svg';

import styles from './rate.module.css';

export default function Rate({ value }) {
  // TODO: Add fillin and empty stars
  const arr = Array(value)
    .fill(null)
    .map((_, i) => i);

  return (
    <div>
      {arr.map((el) => (
        <Star key={el} className={styles.icon} />
      ))}
    </div>
  );
}
