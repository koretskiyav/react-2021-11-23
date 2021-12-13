import { useMemo } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import { setActiveRestaurantId } from '../../redux/actions';
import {
  restaurantsSelector,
  activeRestaurantIdSelector,
} from '../../redux/selectors';

function Restaurants({ restaurants, activeId, setActiveId }) {
  const tabs = useMemo(
    () =>
      Object.values(restaurants).map(({ id, name }) => ({ id, label: name })),
    [restaurants]
  );

  return (
    <div>
      <Tabs tabs={tabs} onChange={setActiveId} activeId={activeId} />
      <Restaurant restaurant={restaurants[activeId]} />
    </div>
  );
}

Restaurants.propTypes = {
  restaurants: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  restaurants: restaurantsSelector(state),
  activeId: activeRestaurantIdSelector(state),
});

const mapDispatchToProps = (dispatch, props) => ({
  setActiveId: (id) => dispatch(setActiveRestaurantId(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
