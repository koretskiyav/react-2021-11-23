import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './tabs.module.css';

function Tabs({ tabs, prefix }) {
  return (
    <div className={styles.tabs}>
      {tabs.map(({ id, name }) => (
        <NavLink
          key={id}
          to={`${prefix}/${id}`}
          className={styles.tab}
          activeClassName={styles.active}
        >
          {name}
        </NavLink>
      ))}
    </div>
  );
}

Tabs.defaultProps = {
  prefix: '',
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string,
    }).isRequired
  ).isRequired,
  prefix: PropTypes.string,
};

export default Tabs;
