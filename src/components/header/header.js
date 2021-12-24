import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../icons/logo.svg';
import CurrencySelect from '../currency-select/currency-select';

import styles from './header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <Link to="/restaurants">
        <Logo />
      </Link>
      <CurrencySelect />
    </header>
  );
};

export default Header;
