import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

const Reviews = ({ restaurantId, reviews }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((reviewId) => (
        <Review key={reviewId} id={reviewId} />
      ))}
      <ReviewForm restaurantId={restaurantId} />
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

export default Reviews;
