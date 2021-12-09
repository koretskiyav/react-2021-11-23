import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from '../basket';

export default class App extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {showBasket: false};
  }
  handleBasket = () => {
    this.setState({
      showBasket: !this.state.showBasket
    });
  }

  render() {
    return (
      <div>
        {this.state.showBasket && <Basket restaurants={this.props.restaurants} handleBasket={this.handleBasket}/>}
        <Header setBasket={this.handleBasket}/>
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.array,
};
