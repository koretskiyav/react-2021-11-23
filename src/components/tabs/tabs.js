// import PropTypes from 'prop-types';
// import cn from 'classnames';

import styles from './tabs.module.css';
import { NavLink } from 'react-router-dom';

function Tabs({ tabs, restId, className, activeClassName }) {
  return (
    <div className={styles.tabs}>
      {tabs.map(({ id, name }) => (
        <NavLink
          key={id}
          to={restId ? `/restaurants/${restId}/${id}` : `/restaurants/${id}`}
          className={className}
          activeClassName={activeClassName}
        >
          {name}
        </NavLink>
      ))}
    </div>
  );
}

Tabs.propTypes = {
  // tabs: PropTypes.arrayOf(
  //   PropTypes.shape({
  //     id: PropTypes.string.isRequired,
  //     label: PropTypes.string,
  //   }).isRequired
  // ).isRequired,
  // activeId: PropTypes.string,
  // onChange: PropTypes.func.isRequired,
};

export default Tabs;
