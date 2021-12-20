import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import Tabs from '../tabs';
import {
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';
import styles from '../restaurant/restaurant.module.css';
import { Switch, Route, Redirect } from 'react-router-dom';

const Restaurant = ({ restaurant, averageRating }) => {
  const { id, name, menu, reviews } = restaurant;

  const tabs = [
    { id: 'menu', name: 'Menu' },
    { id: 'reviews', name: 'Reviews' },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs tabs={tabs} restId={restaurant.id} activeClassName={styles.active} className={styles.tab} />
      <Switch>
        <Route path='/restaurants/:restId/menu'>
          {({ match }) => <Menu menu={menu} key={match.params.restId} restId={match.params.restId} />}
        </Route>
        <Route path='/restaurants/:restId/reviews'>
          {({ match }) => <Reviews reviews={reviews} restId={match.params.restId} />}
        </Route>
        <Redirect to={`/restaurants/:restId/menu`} />
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
