import { createStore } from 'redux';
import reducer from './reducer';
import { restaurants } from '../fixtures';

const store = createStore(reducer, {
  products: restaurants
    .flatMap((r) => r.menu)
    .reduce((products, p) => {
      products[p.id] = p;
      return products;
    }, {}),
});

export default store;
