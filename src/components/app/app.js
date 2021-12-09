import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';

const getProductsMap = (restaurants) => {
  const productsMap = new Map();
  restaurants
    .flatMap(item => item.menu)
    .forEach(product => {
        productsMap.set(product.id, {
          name: product.name,
          price: product.price,
        })
    });
  return productsMap;
};

export default class App extends PureComponent {
  render() {
    const productsMap = getProductsMap(this.props.restaurants);
    return (
      <div>
        <Basket productsMap={productsMap} />
        <Header />
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.array,
  order: PropTypes.object,
};
