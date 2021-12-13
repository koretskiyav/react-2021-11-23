import { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

function Restaurants({ restaurants }) {
  const [activeId, setActiveId] = useState(
    restaurants[Object.keys(restaurants)[0]].id
  );

  const tabs = useMemo(
    () =>
      Object.keys(restaurants).map((id) => ({
        id,
        label: restaurants[id].name,
      })),
    [restaurants]
  );

  const activeRestaurant = restaurants[activeId];

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
}

Restaurants.propTypes = {
  restaurants: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  restaurants: state.restaurants,
});

export default connect(mapStateToProps)(Restaurants);
