import { ReactComponent as Logo } from '../../icons/logo.svg';
import styles from './header.module.css';

import { ReactComponent as BasketIcon } from '../../icons/basket.svg';


const Header = ({setBasket}) => (
  <header className={styles.header}>
    <Logo />
    <BasketIcon className={styles.basket} onClick={setBasket}/>
  </header>
);

export default Header;
