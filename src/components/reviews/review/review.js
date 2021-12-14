import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { reviewsSelector, usersSelector } from '../../../redux/selectors';

import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ review, user }) => {
  const { userId, text, rating } = review;
  console.log('Review: ', review);
  return (
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {user.name} {userId}
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
  review: reviewsSelector(state)[props.id],
  // user: usersSelector(state)[props.userId], ///???
  user: usersSelector(state)['dfb982e9-b432-4b7d-aec6-7f6ff2e6af54'],
});

export default connect(mapStateToProps)(Review);
