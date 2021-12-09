import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Item from './item';

import styles from './basket.module.css';

const getTotal = (productsMap, orderItems) => {
  return orderItems.reduce(
    (previous, current) => previous + productsMap.get(current.id).price * current.amount, 
    0
  );
};

const Basket = ({productsMap, order}) => {
  const orderItems = Object.entries(order).map(item => ({
    id: item[0],
    amount: item[1],
  }));

  return <div className={styles.basket}>
    <strong>Your order</strong>
    <ul>
      {orderItems.map(
        (item) => <Item {...item} {...productsMap.get(item.id)} key={item.id} />
      )}
    </ul>
    <div>Total: {getTotal(productsMap, orderItems)}$</div>
  </div>
};

Basket.propTypes = {
  order: PropTypes.object.isRequired,
  productsMap: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  order: state.order || {},
});

export default connect(mapStateToProps)(Basket);
