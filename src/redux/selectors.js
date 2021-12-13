import { createSelector } from 'reselect';

export const restaurantsSelector = (state) => state.restaurants;
const productsSelector = (state) => state.products;
const orderSelector = (state) => state.order;
const usersSelector = (state) => state.users;
const reviewsSelector = (state) => state.reviews;

export const orderProductsSelector = createSelector(
  [productsSelector, orderSelector],
  (products, order) =>
    Object.keys(order)
      .filter((productId) => order[productId] > 0)
      .map((productId) => products[productId])
      .map((product) => ({
        product,
        amount: order[product.id],
        subtotal: order[product.id] * product.price,
      }))
);

export const totalSelector = createSelector(
  [orderProductsSelector],
  (orderProducts) =>
    orderProducts.reduce((acc, { subtotal }) => acc + subtotal, 0)
);

export const productSelector = (state, id) => productsSelector(state)[id];

export const amountSelector = (state, id) => orderSelector(state)[id];

export const reviewSelector = (state, id) => reviewsSelector(state)[id];

export const reviewUserNameSelector = (state, id) =>
  usersSelector(state)[reviewSelector(state, id).userId].name;

export const reviewTextSelector = (state, id) =>
  reviewsSelector(state)[id].text;

export const reviewRatingSelector = (state, id) =>
  reviewsSelector(state)[id].rating;

export const tabsSelector = createSelector(
  [restaurantsSelector],
  (restaurants) =>
    Object.values(restaurants).map(({ id, name }) => ({ id, label: name }))
);

export const averageRatingSelector = createSelector(
  [reviewsSelector],
  (reviews) => {
    const total = Object.values(reviews).reduce(
      (acc, { rating }) => acc + rating,
      0
    );
    return Math.round(total / Object.keys(reviews).length);
  }
);
