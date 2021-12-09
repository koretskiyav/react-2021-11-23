import { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Restaurants from '../restaurants';
import Header from '../header';
import Basket from "../basket";

export default class App extends PureComponent {
  render() {
    const { restaurants } = this.props;
    return (
      <div>
        <Header />
        <Basket restaurants={restaurants}/>
        <Restaurants restaurants={restaurants} />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.array,
};
