import { useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import { connect } from 'react-redux';
import { averageRatingSelector, restaurantSelector } from '../../redux/selectors';

const Restaurant = ({ id, restaurant, averageRating }) => {
  // const { id, name, menu, reviews } = restaurant;

  const [activeTab, setActiveTab] = useState('menu');

  const tabs = [
    { id: 'menu', label: 'Menu' },
    { id: 'reviews', label: 'Reviews' },
  ];

  return (
    <div>
      <Banner heading={restaurant.name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs tabs={tabs} activeId={activeTab} onChange={setActiveTab} />
      {activeTab === 'menu' && <Menu menu={restaurant.menu} key={id} />}
      {activeTab === 'reviews' && <Reviews reviews={restaurant.reviews} />}
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    menu: PropTypes.array,
    // reviews: PropTypes.arrayOf(
    //   PropTypes.shape({
    //     rating: PropTypes.number.isRequired,
    //   }).isRequired
    // ).isRequired,
  }).isRequired,
};

const mapStateToProps = (state, props) => ({
  restaurant: restaurantSelector(state, props.id),
  averageRating: averageRatingSelector(state, restaurantSelector(state, props.id).reviews)
});

export default connect(mapStateToProps)(Restaurant)
