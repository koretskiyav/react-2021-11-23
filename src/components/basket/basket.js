import BasketPosition from './backetPosition';
import { connect, useSelector } from 'react-redux';

import styles from './basket.module.css';
import { useMemo } from 'react';

const Basket = () => {
  const products = useSelector((state) => state.products);
  const order = useSelector((state) => state.order);
  const totalPrice = useMemo(
    () =>
      Object.entries(order).reduce(
        (sum, [id, count]) => sum + products[id].price * count,
        0
      ),
    [products, order]
  );

  return (
    <div className={styles.basket}>
      Your order:
      <div>
        {Object.entries(order)
          .filter(([_, count]) => count > 0)
          .map(([id, count]) => (
            <BasketPosition key={id} product={products[id]} count={count} />
          ))}
      </div>
      {totalPrice > 0 && (
        <div>
          <span>Total price: {totalPrice}$</span>
        </div>
      )}
    </div>
  );
};

export default connect()(Basket);
