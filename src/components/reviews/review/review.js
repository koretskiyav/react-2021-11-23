import PropTypes from 'prop-types';
import Rate from '../../rate';
import { connect } from 'react-redux';
import { reviewWithUserSelector } from '../../../redux/selectors';
import styles from './review.module.css';

const Review = ({ userName, text, rating }) => (
  <div className={styles.review} data-id="review">
    <div className={styles.content}>
      <div>
        <h4 className={styles.name} data-id="review-user">
          {userName}
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
  userName: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  userName: 'Anonymous',
};

const mapStateToProps = reviewWithUserSelector;

export default connect(mapStateToProps)(Review);
