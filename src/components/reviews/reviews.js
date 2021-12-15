import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Review from './review';
import ReviewForm from './review-form';
import styles from './reviews.module.css';

import { loadUserReviews } from '../../redux/actions';
import {
  reviewsLoadedSelector,
  reviewsLoadingSelector,
  usersLoadedSelector,
  usersLoadingSelector,
} from '../../redux/selectors';
import Loader from '../loader';

const Reviews = ({
  reviews,
  restId,
  loadUserReviews,
  reviewsLoading,
  reviewsLoaded,
  usersLoading,
  usersLoaded,
}) => {
  useEffect(() => {
    if (!reviewsLoading && !reviewsLoaded) {
      const fetchUsers = !usersLoading && !usersLoaded;
      loadUserReviews({ fetchUsers, restId });
    }
  }, [
    restId,
    loadUserReviews,
    reviewsLoading,
    reviewsLoaded,
    usersLoading,
    usersLoaded,
  ]);

  if (usersLoading || reviewsLoading) return <Loader />;
  if (!reviewsLoaded) return 'Сорян, отзывы не подгрузили';

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
  reviewsLoading: reviewsLoadingSelector(state, props),
  reviewsLoaded: reviewsLoadedSelector(state, props),
  usersLoading: usersLoadingSelector(state),
  usersLoaded: usersLoadedSelector(state),
});

const mapDispatchToProps = {
  loadUserReviews,
};

export default connect(mapStateToProps, mapDispatchToProps)(Reviews);
