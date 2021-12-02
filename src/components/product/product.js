import counter from '../../hocs/counter';

import styles from './product.module.css';

import { ReactComponent as Minus } from '../../icons/minus.svg';
import { ReactComponent as Plus } from '../../icons/plus.svg';

function Product({ product, amount, decrement, increment }) {
  return (
    <div className={styles.product}>
      <figure className="image is-4by3">
        <img
          className={styles.image}
          src="https://bulma.io/images/placeholders/640x480.png"
          alt="the picture of meal"
        />
      </figure>
      <p className="subtitle is-3">{product.name}</p>
      <p className="subtitle is-5">{product.ingredients}</p>
      <div className={styles.controlbar_container}>
        <p className="subtitle is-4">{product.price} $</p>
        <div className={styles.controlbar}>
          <button className="button is-info is-inverted" onClick={decrement}>
            <Minus className={styles.icon} />
          </button>
          <span className={styles.amount}>{amount}</span>
          <button className="button is-info is-inverted" onClick={increment}>
            <Plus className={styles.icon} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default counter(Product);
