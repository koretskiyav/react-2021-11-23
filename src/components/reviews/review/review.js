import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Rate from '../../rate';
import styles from './review.module.css';
import { reviewsSelector, usersSelector } from '../../../redux/selectors';

const Review = ({ user, text, rating }) => (
  <div className={styles.review} data-id="review">
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id="review-user">
          {user}
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

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

export default connect((state, props) => {
  console.log('review id:', props.id);
  const review = reviewsSelector(state)[props.id];
  const user = usersSelector(state)[review.userId];
  return { ...review, user: user.name };
})(Review);
