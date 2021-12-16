import { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import { restaurantsSelector } from '../../redux/selectors';

function Restaurants({ restaurants }) {
  const [activeId, setActiveId] = useState(
    'a757a0e9-03c1-4a2a-b384-8ac21dbe2fb2'
  );
  const tabs = useMemo(
    () =>
      Object.keys(restaurants).map((id) => ({
        id,
        label: restaurants[id].name,
      })),
    [restaurants]
  );

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      {/* тут просто передали ID ресторана, там приняли через селекторы из props  нашли нужный ресторан и */}
      <Restaurant id={activeId} />
    </div>
  );
}

Restaurants.propTypes = {
  restaurants: PropTypes.shape(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string,
    }).isRequired
  ).isRequired,
};

export default connect((state) => {
  return {
    restaurants: restaurantsSelector(state),
  };
})(Restaurants);
