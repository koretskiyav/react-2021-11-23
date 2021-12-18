import { connect } from 'react-redux';
import { Redirect, useRouteMatch, Route, Switch } from 'react-router-dom';
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

const Restaurant = ({ restaurant, averageRating }) => {
  const match = useRouteMatch();

  const { id, name, menu, reviews } = restaurant;

  const tabs = [
    { id: 'menu', label: 'Menu' },
    { id: 'reviews', label: 'Reviews' },
  ];

  return (
    <div>
      <Banner heading={name}>
        <Rate value={averageRating} />
      </Banner>
      <Tabs tabs={tabs} resource={`${match.url}`} />
      <Switch>
        <Route path={`${match.path}/menu`}>
          <Menu menu={menu} key={id} restId={id} />
        </Route>
        <Route path={`${match.path}/reviews`}>
          <Reviews reviews={reviews} restId={id} />
        </Route>
        <Redirect to={`${match.path}/menu`} />
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
