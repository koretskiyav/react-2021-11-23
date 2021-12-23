import styles from './currency-switcher.module.css';

const CurrencySwitcher = ({ currencies, setCurrency }) => {
  return (
    <div className={styles.currencies}>
      {currencies.map((currency) => (
        <button key={currency} onClick={() => setCurrency(currency)}>
          {currency}
        </button>
      ))}
    </div>
  );
};

export default CurrencySwitcher;
