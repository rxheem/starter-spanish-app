import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Imports
import Navbar from './views/Navbar';

function App() {
  return (
    <div className='App'>
      <Route path='/' component={Navbar} />
      <Switch>
        <span />
      </Switch>
    </div>
  );
}

export default App;
