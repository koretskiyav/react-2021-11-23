import { PureComponent } from 'react';
import Restaurants from './restaurants';
import {restaurants} from '../fixtures';

export default class App extends PureComponent {
  render() {
    return (
      <div>
        <Restaurants restaurants={restaurants} />
      </div>
    );
  }
}
