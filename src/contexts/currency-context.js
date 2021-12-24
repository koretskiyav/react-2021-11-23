import { useState, createContext } from 'react';

const RUR = 'RUR';
const USD = 'USD';
const EUR = 'EUR';

const currencies = {
  [USD]: {
    rate: 1,
    sym: '$',
  },
  [EUR]: {
    rate: 0.88,
    sym: '€',
  },
  [RUR]: {
    rate: 73,
    sym: '₽',
  },
};
const currenciesList = Object.keys(currencies);
const DEFAULT_CURRENCY = USD;

export const currencyContext = createContext(DEFAULT_CURRENCY);

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState(DEFAULT_CURRENCY);

  const getConvertedValue = (value) => {
    const currencyInfo = currencies[currency];
    return `${value * currencyInfo.rate} ${currencyInfo.sym}`;
  };

  return (
    <currencyContext.Provider
      value={{
        currencies,
        currenciesList,
        currency,
        setCurrency,
        getConvertedValue,
      }}
    >
      {children}
    </currencyContext.Provider>
  );
}
