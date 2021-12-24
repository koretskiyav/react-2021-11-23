import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import App from './components/app';
import './index.css';

import { CurrencyProvider } from './contexts/currency-context';
import history from './history';
import store from './redux/store';

// DEV ONLY!!!
window.store = store;

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <CurrencyProvider>
        <App />
      </CurrencyProvider>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);
