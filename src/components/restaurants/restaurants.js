import { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import { restaurantsSelector } from '../../redux/selectors';

function Restaurants({ restaurants }) {
  const key = Object.keys(restaurants);
  const [activeId, setActiveId] = useState(restaurants[key[0]].id);

  const tabs = useMemo(
    () => Object.entries(restaurants).map(item => ({ id: item[1].id, label: item[1].name })),
    [restaurants]
  );

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant id={activeId} />
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
});

export default connect(mapStateToProps)(Restaurants);
