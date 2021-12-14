import { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';

import { restaurantsSelector } from '../../redux/selectors';

function Restaurants({ restaurants }) {
  const [activeId, setActiveId] = useState(Object.keys(restaurants)[0]);
  const tabs = useMemo(
    () => Object.values(restaurants).map(({ id, name }) => ({ id, label: name })),
    [restaurants]
  );

  const activeRestaurant = useMemo(
    () => restaurants[activeId],
    [activeId, restaurants]
  );

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant restaurant={activeRestaurant} />
    </div>
  );
}

Restaurants.propTypes = {
  restaurants: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    }).isRequired
};

export default connect((state, props) => {
  return {
    restaurants: restaurantsSelector(state)
  };
})(Restaurants);

