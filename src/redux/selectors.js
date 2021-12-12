import { createSelector } from 'reselect';

// const restaurantsSelector = (state) => state.restaurants;
const productsSelector = (state) => state.products;
const orderSelector = (state) => state.order;

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

const reviewsSelector = (state) => state.reviews;

const selectReviewId = (state, reviewId) => reviewId;

export const reviewSelector = createSelector(
  [reviewsSelector, selectReviewId],
  (reviews, reviewId) => reviews[reviewId]
);
export const averageRatingSelector = createSelector(
  [reviewsSelector, (state, reviewIds) => reviewIds],
  (reviews, reviewIds) => {
    const total = reviewIds.reduce((acc, id) => acc + reviews[id].rating, 0);
    return Math.round(total / reviewIds.length);
  }
);

const usersSelector = (state) => state.users;
const userIdSelector = (state, userId) => userId;

export const userSelector = createSelector(
  [usersSelector, userIdSelector],
  (users, userId) => users[userId]
);

const restaurantsSelector = (state) => state.restaurants;
export const restaurantsArraySelector = createSelector(
  [restaurantsSelector],
  (restaurants) => Object.values(restaurants)
);

export const productAmountSelector = createSelector(
  [orderSelector, (_, productId) => productId],
  (order, productId) => order[productId] || 0
);

export const productSelector = createSelector(
  [productsSelector, (_, productId) => productId],
  (products, productId) => products[productId]
);
