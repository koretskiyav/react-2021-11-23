import { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Product from '../product';
import Basket from '../basket';
import Loader from '../loader';

import {
  productsLoadingSelector,
  productsLoadedSelector,
} from '../../redux/selectors';
import { loadProducts } from '../../redux/actions';

import styles from './menu.module.css';

class Menu extends Component {
  static propTypes = {
    menu: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    loading: PropTypes.bool.isRequired,
    loaded: PropTypes.bool.isRequired,
    restId: PropTypes.string,
    loadProducts: PropTypes.func,
  };

  state = { error: null };

  loadProducts = () => {
    const { loadProducts, restId, loading, loaded } = this.props;
    if (!loading && !loaded) {
      loadProducts(restId);
    }
  };

  componentDidMount() {
    this.loadProducts();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.restId !== this.props.restId) {
      this.loadProducts();
    }
  }

  componentDidCatch(error) {
    this.setState({ error });
  }

  render() {
    const { menu, loading, loaded } = this.props;

    if (loading) {
      return <Loader />;
    }

    if (this.state.error || !loaded) {
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
  }
}

const mapStateToProps = (state, props) => ({
  loading: productsLoadingSelector(state, props),
  loaded: productsLoadedSelector(state, props),
});

const mapDispatchToProps = { loadProducts };

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
