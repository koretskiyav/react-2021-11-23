import { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

function Restaurants({ restaurants }) {
  // 'a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2'
  const [activeId, setActiveId] = useState(restaurants[0].id);

//CHANGE HERE
  const defaultRestaurants = restaurants.reduce(
    (acc, restaurant) => ({ ...acc, [restaurant.id]: restaurant }),
    {}
  );

  const tabs = useMemo(() =>
    Object.keys(defaultRestaurants).map((id, name) => ({
      id,
      label: defaultRestaurants[id].name,
    }))
  );

  const activeRestaurant = useMemo(() => defaultRestaurants[activeId]);

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
}

Restaurants.propTypes = {
  restaurants: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
    }).isRequired
  ).isRequired,
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});

export default connect(mapStateToProps)(Restaurants);
