import Rate from "./rate";
import styles from './review.module.css';

export default function Review ({user, text, rating}) {
    return (
        <div className={styles.review}>
            <h3>{user}</h3>
            <p>{text}</p>
            <Rate value={rating} />
        </div>        
    )
}