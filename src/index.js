import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

import 'normalize.css/normalize.css';
import 'animate.css';
import 'bulma/css/bulma.css';

// Bootstrap essentials
import 'bootstrap/dist/css/bootstrap-grid.css';

// Imports
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
serviceWorker.unregister();
