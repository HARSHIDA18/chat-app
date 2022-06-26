import React from 'react';
import { Router } from 'react-router';
import SignIn from './pages/SignIn';
import {Route};

function App() {
  return (
    <Switch>
      <Route path="/signin">
        <SignIn />
      </Route>

      <PrivateRoute path="/">
        <Home />
      </PrivateRoute>
    </Switch>
  );
}

export default App;
