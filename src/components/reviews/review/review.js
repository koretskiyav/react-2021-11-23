import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Rate from '../../rate';
import styles from './review.module.css';

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
    name: state.users[state.reviews[props.id].userId].name,
    reviews: state.reviews,
    text: state.reviews[props.id].text,
    rating: state.reviews[props.id].rating,
  };
})(Review);

