import styles from './success.module.css';

function Success({ children }) {
  return <div className={styles.success}>{children}</div>;
}

export default Success;
