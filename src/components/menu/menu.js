import { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Product from '../product';
import Basket from '../basket';

import styles from './menu.module.css';
import { loadProducts } from '../../redux/actions';
import { menuLoadedSelector, menuLoadingSelector } from '../../redux/selectors';
import Loader from '../loader';

const Menu = ({ menu, restId, loadProducts, loading, loaded }) => {
  useEffect(() => {
    if (!loading && !loaded) {
      loadProducts(restId);
    }
  }, [restId, loading, loaded, loadProducts]);

  if (loading) return <Loader />;
  if (!loaded) {
    return <p>Меню этого ресторана сейчас недоступно :(</p>;
  }

  return (
    <div className={styles.menu}>
      <div>
        {menu.map((id) => (
          <Product key={id} id={id} />
        ))}
      </div>
      <div>
        <Basket />
      </div>
    </div>
  );
};

Menu.propTypes = {
  menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  restId: PropTypes.string.isRequired,
  loadProducts: PropTypes.func.isRequired,
  loading: PropTypes.bool,
  loaded: PropTypes.bool,
};

const mapStateToProps = (state, props) => ({
  loading: menuLoadingSelector(state, props),
  loaded: menuLoadedSelector(state, props),
});

const mapDispatchToProps = {
  loadProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
