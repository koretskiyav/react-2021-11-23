import Product from '../product/product';
import styles from './menu.module.css'
export default function Menu({ menu }) {
  return (
    <div className={styles.menu_container}>
      {menu.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
}