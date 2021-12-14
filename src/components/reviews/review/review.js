import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rate from '../../rate';
import styles from './review.module.css';

import { usersSelector, reviewsSelector } from '../../../redux/selectors';

const Review = ({ name, text, rating, users }) => {
  return(
    <div className={styles.review} data-id="review">
      <div className={styles.content}>
        <div>
          <h4 className={styles.name} data-id="review-user">
            {name}
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
  )
};

Review.propTypes = {
  user: PropTypes.string,
  text: PropTypes.string,
  rating: PropTypes.number.isRequired,
};

Review.defaultProps = {
  user: 'Anonymous',
};

export default connect((state, props) => {
  return {
    name: usersSelector(state)[reviewsSelector(state)[props.id].userId].name,
    reviews: reviewsSelector(state),
    text: reviewsSelector(state)[props.id].text,
    rating: reviewsSelector(state)[props.id].rating,
  };
})(Review);

