import { connect } from 'react-redux';
import { decrement, deleteItem, increment } from '../../../redux/actions';
import styles from '../../product/product.module.css';
import Button from '../../button';

function BasketItem({ id, name, amount, decrement, increment, deleteItem, summ }) {
  return (
    <div>
      <div>
        <span>{name}</span>&nbsp;
        <span>{amount}</span>&nbsp;
        <span>{summ}</span>
      </div>
      <div className={styles.buttons}>
        <Button
          onClick={decrement}
          data-id='product-decrement'
          icon='minus'
        />
        <Button
          onClick={increment}
          data-id='product-increment'
          icon='plus'
        />
        <Button
          onClick={deleteItem}
          data-id='product-delete'
          icon='delete'
        />
      </div>
    </div>
  )
}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch, props) => ({
  decrement: () => dispatch(decrement(props.id)),
  increment: () => dispatch(increment(props.id)),
  deleteItem: () => dispatch(deleteItem(props.id))
})

export default connect(mapStateToProps, mapDispatchToProps)(BasketItem)