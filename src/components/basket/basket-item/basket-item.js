import { connect } from 'react-redux';
import cn from 'classnames';
import { increment, decrement, remove } from '../../../redux/actions';
import Button from '../../button';
import styles from './basket-item.module.css';
import { Link } from 'react-router-dom';
import { RestaurantOfProductSelector } from '../../../redux/selectors';

function BasketItem({
  product,
  amount,
  subtotal,
  increment,
  decrement,
  remove,
}) 
{
  return (
    <Link to={`/`}>
      <div className={styles.basketItem}>
        <div className={styles.name}>
          <span>{product.name}</span>
        </div>
        <div className={styles.info}>
          <div className={styles.counter}>
            <Button onClick={decrement} icon="minus" secondary small />
            <span className={styles.count}>{amount}</span>
            <Button onClick={increment} icon="plus" secondary small />
          </div>
          <p className={cn(styles.count, styles.price)}>{subtotal} $</p>
          <Button onClick={remove} icon="delete" secondary small />
        </div>
      </div>
    </Link>
  );
}

const mapDispatchToProps = (dispatch, ownProps) => ({
  increment: () => dispatch(increment(ownProps.product.id)),
  decrement: () => dispatch(decrement(ownProps.product.id)),
  remove: () => dispatch(remove(ownProps.product.id)),
});
const mapStateToProps = (state, {id}) => ({
  restaurant: RestaurantOfProductSelector(state, {id}),
});

export default connect(mapStateToProps, mapDispatchToProps)(BasketItem);
