import ReactDOM from 'react-dom';
import App from './components/app';
import './index.css';

import { restaurants } from './fixtures';

ReactDOM.render(
  <App restaurants={restaurants} />,
  document.getElementById('root')
);
