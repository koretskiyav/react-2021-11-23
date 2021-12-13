import { createSelector } from 'reselect';

export const restaurantsSelector = (state) => state.restaurants;
const productsSelector = (state) => state.products;
const orderSelector = (state) => state.order;
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

export const productAmountSelector = createSelector(
  [orderSelector, (state, id) => id],
  (order, id) => order[id] || 0
)

export const productSelector = createSelector(
  [productsSelector, (state, id) => id],
  (product, id) => product[id]
)

export const restaurantSelector = createSelector(
  [restaurantsSelector, (state, id) => id],
  (restaurants, id) => restaurants[id]
)

export const averageRatingSelector = createSelector(
  [reviewsSelector, (state, reviewIds) => reviewIds],
  (reviews, reviewIds) => {
    console.log('4444', reviewIds);
    const total = reviewIds.reduce((acc, id) => acc + reviews[id].rating, 0);
    return Math.round(total / reviewIds.length);
  }
)