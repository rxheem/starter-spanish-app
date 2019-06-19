import React from 'react';
import { Route, Switch } from 'react-router-dom';
// Imports
import Navbar from './views/Navbar';

// Main components
import Aim from './components/Aim';
import Contact from './components/Contact';
import Overview from './components/Overview';

function App() {
  return (
    <div className='App'>
      <Route path='/' component={Navbar} />
      <Switch>
        <Route exat path='/aim/' component={Aim} />
        <Route exat path='/overview/' component={Overview} />
        <Route exat path='/contact/' component={Contact} />
      </Switch>
    </div>
  );
}

export default App;
