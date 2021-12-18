import { useEffect, useMemo } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect, useRouteMatch } from 'react-router-dom';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Tabs from '../tabs';
import Loader from '../loader';
import {
  restaurantsListSelector,
  restaurantsLoadingSelector,
  restaurantsLoadedSelector,
} from '../../redux/selectors';
import { loadRestaurants } from '../../redux/actions';

function Restaurants({ restaurants, loading, loaded, loadRestaurants }) {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, [loading, loaded, loadRestaurants]);
  const match = useRouteMatch();

  const tabs = useMemo(
    () =>
      restaurants.reduce(
        (tabs, rest) => [...tabs, { id: rest.id, label: rest.name }],
        []
      ),
    [restaurants]
  );

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

  return (
    <div>
      <Tabs tabs={tabs} resource={match.path} />
      <Switch>
        <Route path="/restaurants/:restId">
          {({ match }) => <Restaurant id={match.params.restId} />}
        </Route>
        <Redirect to={`/restaurants/${restaurants[0].id}`} />
      </Switch>
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
  restaurants: restaurantsListSelector(state),
  loading: restaurantsLoadingSelector(state),
  loaded: restaurantsLoadedSelector(state),
});

const mapDispatchToProps = {
  loadRestaurants,
};

export default connect(mapStateToProps, mapDispatchToProps)(Restaurants);
