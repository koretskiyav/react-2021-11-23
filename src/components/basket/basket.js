import { connect } from 'react-redux';
import { decrement, increment, removeItem } from '../../redux/actions';

import { ReactComponent as DeleteIcon } from '../../icons/delete-icon.svg';
import Button from '../button';
import styles from './basket.module.css';

const Basket = ({ order, decrement, increment, restaurants, removeItem, handleBasket}) => {
  const dishes = [...restaurants].map(item => item.menu.map(item2 => item2)).flat(2);
  let selectedItems = [];

  for (let key in order) {
    dishes.forEach(item => {
       if (item.id === key){
         selectedItems = [...selectedItems, item];
         item.qty = order[key]
       }
     })
  }
  const totalPrice = selectedItems.reduce(( prev, cur ) => prev + cur.price*cur.qty, 0)

  return(
    <div className={styles.basket}>
      <DeleteIcon className={styles.closeIcon} onClick={handleBasket} />
      <p>Selected Items:</p>
      {selectedItems.map(item => (
        <div key={item.id} className={styles.basketItem}>
          <div>
            <p>{item.name}</p>
            <p>{item.qty*item.price}$</p>
            <p className={styles.qty}>qty: {item.qty}</p>
          </div>
          <div className={styles.wrapperButtons}>
            <DeleteIcon className={styles.deleteIcon} onClick={() => removeItem(item.id)} />
            <div className={styles.buttons}>
              <Button
                onClick={() => decrement(item.id)}
                icon="minus"
              />
              <Button
                onClick={() => increment(item.id)}
                icon="plus"
              />
            </div>
          </div>
        </div>
        )
      )}
      <p>Total price: {totalPrice}$</p>
    </div>
  )
};

const mapStateToProps = (state, props) => ({
  order: state.order
});

const mapDispatchToProps = {
  decrement,
  increment,
  removeItem,
};
export default connect(mapStateToProps, mapDispatchToProps)(Basket);
