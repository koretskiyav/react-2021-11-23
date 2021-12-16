import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Loader from '../loader';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import {
  reviewsLoadedSelector,
  usersLoadedSelector,
} from '../../redux/selectors';

import { loadReviews, loadUsers } from '../../redux/actions';

const Reviews = ({
  reviews,
  restId,
  loadReviews,
  reviewsLoaded,
  loadUsers,
  usersLoaded,
}) => {
  useEffect(() => {
    loadReviews(restId);
    loadUsers();
  }, [restId, loadReviews, loadUsers]);

  if (!usersLoaded || !reviewsLoaded) return <Loader />;

  return (
    <div className={styles.reviews}>
      {reviews.map((id) => (
        <Review key={id} id={id} />
      ))}
      <ReviewForm restId={restId} />
    </div>
  );
};

Reviews.propTypes = {
  restId: PropTypes.string,
  reviews: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};

const mapStateToProps = (state, props) => ({
  reviewsLoaded: reviewsLoadedSelector(state, props),
  usersLoaded: usersLoadedSelector(state, props),
});

const mapDispatchToProps = {
  loadReviews,
  loadUsers,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
