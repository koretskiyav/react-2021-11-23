import Review from "./review";
import styles from './review.module.css';

export default function Reviews ({reviews}) {
    return (
        <div className={styles.review_wrapper}>
            {reviews.map((review) => {
                return (
                    <Review key={review.id} user={review.user} text={review.text} rating={review.rating} />                    
                )             
            })}
        </div>
    )
}