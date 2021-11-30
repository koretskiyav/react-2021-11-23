import styles from '../css/product.module.css';

export default function Tabs({ tabs, onChange }) {
  return (
    <div>
      {tabs.map(({ id, label }) => (
        <button key={id} className={styles.buttons} onClick={() => onChange(id)}>
          {label}
        </button>
      ))}
    </div>
  );
}
