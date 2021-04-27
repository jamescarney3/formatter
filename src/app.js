import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { HomePage, InPage, OutPage } from 'pages';
import { StoreProvider } from 'store';


/*
main application module: wrap the whole tree in a provider for our store
context and router context, render a cursory navigation interface and a router
switch with pages
*/
const App = () => (
  <StoreProvider>
    <Router>
      <h1>Hello, formatter</h1>
      <div>
        {/* a navbar for the expeditious */}
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
