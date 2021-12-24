import styles from './error.module.css';

function Error({ children }) {
  return <div className={styles.error}>{children}</div>;
}

export default Error;
