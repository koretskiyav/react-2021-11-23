import { restaurantsSelector, tabsSelector } from '../../redux/selectors';

import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import { connect } from 'react-redux';
import { useState } from 'react';

function Restaurants({ tabs, restaurants }) {
  const [activeId, setActiveId] = useState(Object.keys(restaurants)[0]);

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant restaurant={restaurants[activeId]} />
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
  restaurants: restaurantsSelector(state),
  tabs: tabsSelector(state),
});

export default connect(mapStateToProps)(Restaurants);
