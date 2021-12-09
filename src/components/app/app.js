import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import Cart from '../cart/cart';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Header />
        <Cart />
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.array,
};
