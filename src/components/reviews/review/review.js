import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  reviewWitUserSelector,
} from '../../../redux/selectors';

import Rate from '../../rate';
import styles from './review.module.css';

const Review = ({ text, rating, user }) => {
  console.log('Review: ');
  return (
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
};

Review.propTypes = {
  userId: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

const mapStateToProps = reviewWitUserSelector;

export default connect(mapStateToProps)(Review);
