import { useMemo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import { decrement, increment } from '../../../redux/actions';

import Button from '../../button';
import styles from './basketPosition.module.css';

const BasketPosition = ({ product, count, increment, decrement }) => {
  const { price, name } = product;
  const totalPrice = useMemo(() => price * count, [price, count]);
  return (
    <div className={styles.content}>
      <span>{name}</span>
      <span>{price}$</span>
      <span>*</span>
      <span>{count}</span>
      <span>=</span>
      <span>{totalPrice}$</span>
      <Button onClick={decrement} icon="minus" />
      <Button onClick={increment} icon="plus" />
    </div>
  );
};

const mapDispatchToProps = (dispatch, props) => ({
  decrement: () => dispatch(decrement(props.product.id)),
  increment: () => dispatch(increment(props.product.id)),
});

BasketPosition.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string,
    price: PropTypes.number.isRequired,
  }).isRequired,
  count: PropTypes.number.isRequired,
  increment: PropTypes.func,
  decrement: PropTypes.func,
};

export default connect(() => {
  return {};
}, mapDispatchToProps)(BasketPosition);
