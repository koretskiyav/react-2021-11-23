import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styles from './cart.module.css';

import Button from '../button';

function Cart({ products, decrement, increment }) {
  console.log(products);
  return (
    <div className={styles.cart}>
      <h2>Cart</h2>
      <ul>
        {Object.keys(products).map((key, amount) => (
          <li className={styles.product} key={key}>
            <div className={styles.name}>{key}</div>
            <div className={styles.amount}>{products[key]}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state, props) => ({
  products: state.order,
});

export default connect(mapStateToProps)(Cart);
