import { createContext, useContext } from 'react';

// for testing
export const exchangeRates = {
  USD: { code: 'USD', sign: '$', rate: 1 },
  RUB: { code: 'RUB', sign: '₽', rate: 70 },
  EUR: { code: 'EUR', sign: '€', rate: 0.88 },
};

export const currencyContext = createContext('');

export const useCurrency = (dollars) => {
  const context = useContext(currencyContext);
  const currentCurrency = context.exchangeRates[context.currency];
  return [dollars * currentCurrency.rate, currentCurrency.sign];
};

export const CurrencyProvider = currencyContext.Provider;
