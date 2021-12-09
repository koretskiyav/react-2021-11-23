import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '../button';
import { decrement, increment, remove } from '../../redux/actions';

import styles from './basket.module.css';

const Item = ({id, amount, name, price, increment, decrement, remove}) => (
  <li className={styles['basket-item']}>
    {name} {price}$ x {amount} = {price * amount}$
    <span className={styles['basket-buttons']}>
      <Button
        onClick={increment}
        icon="plus"
      />
      <Button
        onClick={decrement}
        icon="minus"
      />
      <Button
        onClick={remove}
        icon="delete"
      />
    </span>  
  </li>
);

Item.propTypes = {
  id: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired,
};


const mapDispatchToProps = (dispatch, props) => ({
  decrement: () => dispatch(decrement(props.id)),
  increment: () => dispatch(increment(props.id)),
  remove: () => dispatch(remove(props.id)),
});

export default connect(null, mapDispatchToProps)(Item);
