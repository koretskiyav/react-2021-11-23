import { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';

import { reviewsSelector } from '../../redux/selectors';

const Restaurant = ({ restaurant, allReviews, currentReviews }) => {
  const { id, name, menu, reviews } = restaurant;
  const [activeTab, setActiveTab] = useState('menu');
  const averageRating = useMemo(() => {
    const total = currentReviews.reduce((acc, { rating }) => acc + rating, 0);
    return Math.round(total / reviews.length);
  }, [reviews]);

  const tabs = [
    { id: 'menu', label: 'Menu' },
    { id: 'reviews', label: 'Reviews' },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs tabs={tabs} activeId={activeTab} onChange={setActiveTab} />
      {activeTab === 'menu' && <Menu menu={menu} key={id} />}
      {activeTab === 'reviews' && <Reviews id={id} reviews={reviews} />}
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    menu: PropTypes.arrayOf(PropTypes.string),
    reviews: PropTypes.arrayOf(PropTypes.string)
  }).isRequired,
};

export default connect((state, props) => {
  return {
    allReviews: reviewsSelector(state),
    currentReviews: props.restaurant.reviews.map(item => reviewsSelector(state)[item])
  };
})(Restaurant);
