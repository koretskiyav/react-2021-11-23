import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ id, user, review }) => (
  <div className={styles.review} data-id="review">
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id="review-user">
          {user.name}
        </h4>
        <p className={styles.comment} data-id="review-text">
          {review.text}
        </p>
      </div>
      <div className={styles.rate}>
        <Rate value={review.rating} />
      </div>
    </div>
  </div>
);

Review.propTypes = {
  id: PropTypes.string.isRequired,
  user: PropTypes.shape,
  review: PropTypes.shape,
};

const mapStateToProps = (state, props) => ({
  review: state.reviews[props.id],
  user: state.users[state.reviews[props.id].userId],
});

export default connect(mapStateToProps)(Review);
