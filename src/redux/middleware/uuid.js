import { v4 as uuidv4 } from 'uuid';
import { ADD_REVIEW, ADD_USER, UPDATE_RESTAURANTS } from '../constants';

export default (store) => (next) => (action) => {
  const userID = uuidv4();
  const reviewID = uuidv4();
  console.log(action.id)
  next({'type': ADD_USER, 'user': { ...action.user, 'id': userID }});
  next({'type': ADD_REVIEW, 'review': {...action.review, 'id': reviewID, 'userId': userID}});

  console.log('after: ', store.getState());
};
