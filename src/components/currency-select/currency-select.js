import { useContext, useCallback } from 'react';

import { currencyContext } from '../../contexts/currency-context';

import styles from './currency-select.module.css';

const CurrencySelect = () => {
  const { currenciesList, currency, setCurrency } = useContext(currencyContext);

  const onChange = useCallback(
    (e) => setCurrency(e.target.value),
    [setCurrency]
  );

  return (
    <select className={styles['currency-select']} onChange={onChange}>
      {currenciesList.map((id) => (
        <option key={id} value={id} checked={id === currency}>
          {id}
        </option>
      ))}
    </select>
  );
};

export default CurrencySelect;
