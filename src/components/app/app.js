import { useMemo, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';
import Success from '../success';
import Error from '../error';
import { UserProvider } from '../../contexts/user-context';
import {
  CurrencyProvider,
  exchangeRates,
} from '../../contexts/currency-context';
import CurrencySwitcher from '../currency-switcher';

const App = () => {
  const [name, setName] = useState('Andrey');

  const rates = exchangeRates;
  const currencies = useMemo(() => Object.keys(rates), [rates]);
  const [currency, setCurrency] = useState(currencies[0]);

  return (
    <div>
      <UserProvider value={{ name, setName }}>
        <CurrencyProvider value={{ currency, exchangeRates: rates }}>
          <Header />
          <CurrencySwitcher currencies={currencies} setCurrency={setCurrency} />
          <Switch>
            <Redirect exact from="/" to="/restaurants" />
            <Route path="/checkout" component={Basket} />
            <Route path="/restaurants" component={Restaurants} />
            <Route path="/success" component={Success} />
            <Route path="/error" component={Error} />
            <Route
              path="/"
              component={() => <h2>404 - Page Not Found :(</h2>}
            />
          </Switch>
        </CurrencyProvider>
      </UserProvider>
    </div>
  );
};

export default App;
