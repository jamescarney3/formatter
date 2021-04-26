import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { HomePage, InPage, OutPage } from 'pages';
import { StoreProvider } from 'store';


const App = () => (
  <StoreProvider>
    <Router>
      <h1>Hello, formatter</h1>
      <div>
        <Link to="/">Home</Link>
        {' '}
        <Link to="/in">In</Link>
        {' '}
        <Link to="/out">Out</Link>
      </div>
      <div style={{ width: '500px' }}>
        <Switch>
          <Route path="/in"><InPage /></Route>
          <Route path="/out"><OutPage /></Route>
          <Route path="/"><HomePage /></Route>
        </Switch>
      </div>
    </Router>
  </StoreProvider>
);

export default App;
