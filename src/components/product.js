import counter from '../hocs/counter';

import { ReactComponent as Minus } from '../assets/icons/minus.svg';
import { ReactComponent as Plus } from '../assets/icons/plus.svg';

import styles from '../assets/css/product.module.css';

function Product({ product, amount, decrement, increment }) {
  return (
    <div className={styles.card}>
      <p>{product.name}</p>
      <p>{product.price} $</p>
      <button onClick={decrement}>
        <Minus className={styles.icon} />
      </button>
      {amount}
      <button onClick={increment}>
        <Plus className={styles.icon} />
      </button>
    </div>
  );
}

export default counter(Product);
