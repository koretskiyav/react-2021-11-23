import { ReactComponent as Star } from '../icons/star.svg';

import styles from './rate.module.css';

export default function Rate({text, value}) {
  let rate = [...Array(Math.round(value)).keys()].map((i) => <Star key={i} className={styles.star}/>)

  return (
    <div className={styles.rate}>
      {text}{rate}
    </div>
  )
}