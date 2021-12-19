import { connect } from 'react-redux';
import { NavLink, Switch, Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Menu from '../menu';
import Reviews from '../reviews';
import Banner from '../banner';
import Rate from '../rate';
import {
  averageRatingSelector,
  restaurantSelector,
} from '../../redux/selectors';

import styles from './restaurant.module.css';

const Restaurant = ({ restaurant, averageRating }) => {
  const { id, name, menu, reviews } = restaurant;
  const tabs = [
    { idTab: 'menu', label: 'Menu' },
    { idTab: 'reviews', label: 'Reviews' },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <div className={styles.tabs}>
        {tabs.map(({ idTab, label }) => (
          <NavLink
            key={idTab}
            to={`/restaurants/${id}/${label.toLowerCase()}`}
            className={styles.tab}
            activeClassName={styles.active}
          >
            {label}
          </NavLink>
        ))}
      </div>
      <Switch>
        <Route
          path="/restaurants/:restId/menu"
          component={() => <Menu menu={menu} key={id} restId={id} />}
        />
        <Route
          path="/restaurants/:restId/reviews"
          component={() => <Reviews reviews={reviews} restId={id} />}
        />
        <Redirect to={`/restaurants/${id}/${tabs[0].label.toLowerCase()}`} />
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
