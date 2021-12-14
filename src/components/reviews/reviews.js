import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

const Reviews = ({ reviews, id }) => {
  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id}/>
      ))}
      <ReviewForm id={id} />
    </div>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Reviews;
