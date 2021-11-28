import { ReactComponent as Star } from '../../icons/star.svg';
import styles from './rate.module.css'

export default function Rate({ value }) {
  return (
    <div>
      {Array(value).fill().map((item, index) => {
        return <Star key={index} className={styles.star}/>
      })}
    </div>
  )
}