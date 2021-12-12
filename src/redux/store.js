import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import logger from './middleware/logger';

import reducer from './reducer';
import idGenerator from './middleware/idGenerator';

export default createStore(
  reducer,
  composeWithDevTools(applyMiddleware(idGenerator, logger))
);
