import styles from '../css/review.module.css';

import { ReactComponent as Star } from '../icons/star.svg';


export default function Rate ({ value }) {
  const starsArray = new Array(value).fill(<Star className={styles.starIcon} />, 0);

  return (
    <div>
      {starsArray}
    </div>    
  );
}