import { v4 as uuidv4 } from 'uuid';

const reviewId = uuidv4();

export default (store) => (next) => (action) => {
  const { type, value } = action;
  // console.log('reviewId', reviewId);
  // console.log('before: ', store.getState());
  // console.log('action: ', action.type);
  // next(action);
  // console.log('after: ', store.getState());
  if (type === 'REVIEWADD') {
    console.log('action111', value);
    next ( {...action, value: {...value, id: reviewId }})
    console.log('action222', value);
  } else {
    next(action);
  }
  // console.log('action222', value);
  // next(action);
};
