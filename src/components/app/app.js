import { PureComponent } from 'react';
import Restaurants from '../restaurants';
import Header from '../header';
import PropTypes from 'prop-types';
//import restaurants from '../restaurants';

export default class App extends PureComponent {
  render() {
  
    return (
      <div>
        <Header/>
        <Restaurants restaurants={this.props.restaurants} />
      </div>
    );
  }
}

App.propTypes = {
  restaurants: PropTypes.array.isRequired,
}
