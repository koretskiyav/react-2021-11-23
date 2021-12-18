import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './tabs.module.css';

function Tabs({ tabs, resource }) {
  return (
    <div className={styles.tabs}>
      {tabs.map(({ id, label }) => (
        <NavLink
          key={id}
          to={`${resource}/${id}`}
          className={styles.tab}
          activeClassName={styles.active}
        >
          {label}
        </NavLink>
      ))}
    </div>
  );
}

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
    }).isRequired
  ).isRequired,
  resource: PropTypes.string.isRequired,
};

export default Tabs;
