import styles from './rate.module.css';
import times from 'lodash.times';
import { ReactComponent as Star } from '../icons/star.svg';

export default function Rate(props) {
  const stars = [];

  times(props.value, (i) => {
    stars.push(<Star key={i} className={styles.iconsmall} />);
  });

  return stars;
}
