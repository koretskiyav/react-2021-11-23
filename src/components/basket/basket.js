import Product from '../product';
import { connect } from 'react-redux';
import store from '../../redux/store';

const Basket = ({ products }) => {
  return (
    <div>
      <h3>Your items:</h3>
      <div>
        {Object.keys(products).length
          ? Object.entries(products).map(([key, value]) => (
              <div key={key}>
                {key}: {value}
              </div>
            ))
          : 'Your cart is empty'}
      </div>
      {/* {console.log(products)} */}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    products: state.order,
  };
};

export default connect(mapStateToProps)(Basket);
