import React from 'react';
import SignIn from './pages/SignIn';

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
