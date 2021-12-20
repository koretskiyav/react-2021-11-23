import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Restaurant from '../restaurant';
import Loader from '../loader';
import {
  restaurantsListSelector,
  restaurantsLoadingSelector,
  restaurantsLoadedSelector,
} from '../../redux/selectors';
import { loadRestaurants } from '../../redux/actions';
import styles from './restaurants.module.css';
import Tabs from '../tabs';

function Restaurants({ restaurants, loading, loaded, loadRestaurants }) {
  useEffect(() => {
    if (!loading && !loaded) loadRestaurants();
  }, [loading, loaded, loadRestaurants]);

  if (loading) return <Loader />;
  if (!loaded) return 'No data :(';

  return (
    <div>
      <Tabs tabs={restaurants} activeClassName={styles.active} className={styles.tab} />
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
