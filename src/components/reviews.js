import Rate from "./rate";

import styles from './reviews.module.css';

const Reviews = ({ reviews }) => reviews.map(({id, user, text, rating}) => (
    <div key={id} className={styles.reviews}>
        <p>{user}</p>
        <p>{text}</p>
        <Rate value={rating} />
    </div>
));

export default Reviews;
