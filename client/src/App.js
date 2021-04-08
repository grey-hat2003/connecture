import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Landing } from './components/layout/Landing';
import Register from './components/auth/Register';
import Login from './components/auth/Login';
import Create_profile from './components/createProfile/createProfile';
import Alert from './components/layout/Alert';
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken'

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Route exact path="/" component={Landing} />
          <section className="container">
            <Alert />
            <Switch>
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/create_profile" component={Create_profile} />
            </Switch>
          </section>
        </Fragment>
      </Router>
    </Provider>
    
  );
};

export default App;