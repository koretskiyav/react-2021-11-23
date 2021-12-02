import { ReactComponent as Star } from '../icons/star.svg';
import styles from './rate.module.css';

export default function Rate({value}) {
  return (
    <div>
      {Array.from(Array(value)).map(() => (<Star className={styles.icon}/>))}
    </div>
  );
}