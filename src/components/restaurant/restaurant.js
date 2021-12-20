import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import {
  NavLink,
  Switch,
  Route,
  Redirect,
  useRouteMatch,
} from 'react-router-dom';
import {
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';
import styles from './restaurant.module.css';

const Restaurant = ({ restaurant, averageRating }) => {
  const { id, name, menu, reviews } = restaurant;
  const { path, url } = useRouteMatch();

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>

      <div className={styles.tabs}>
        <NavLink
          to={`${url}/menu`}
          className={styles.tab}
          activeClassName={styles.active}
        >
          Menu
        </NavLink>
        <NavLink
          to={`${url}/reviews`}
          className={styles.tab}
          activeClassName={styles.active}
        >
          Reviews
        </NavLink>
      </div>

      <Switch>
        <Route path={`${path}/menu`}>
          <Menu menu={menu} restId={id} />
        </Route>
        <Route path={`${path}/reviews`}>
          <Reviews reviews={reviews} restId={id} />
        </Route>
        <Redirect to={`${path}/menu`} />
      </Switch>
    </div>
  );
};

Restaurant.propTypes = {
  restaurant: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    menu: PropTypes.array,
    reviews: PropTypes.array,
  }).isRequired,
  averageRating: PropTypes.number,
};

const mapStateToProps = (state, props) => ({
  restaurant: restaurantSelector(state, props),
  averageRating: averageRatingSelector(state, props),
});

export default connect(mapStateToProps)(Restaurant);
