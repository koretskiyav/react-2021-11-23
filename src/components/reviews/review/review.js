import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect } from 'react';

import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ review }) => {
  const { id, userId, text, rating } = review;
  console.log('Review: ', review, userId);
  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {userId}
          </h4>
          <p className={styles.comment} data-id="review-text">
            {text}
          </p>
        </div>
        <div className={styles.rate}>
          <Rate value={rating} />
        </div>
      </div>
    </div>
  );
};

Review.propTypes = {
  userId: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

const mapStateToProps = (state, props) => ({
  review: state.reviews[props.id],
  user: state.users[props.userId]
});

export default connect(mapStateToProps)(Review);
