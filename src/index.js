import 'babel-polyfill';

import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter,
  Route,
  browserHistory,
  Switch,
} from 'react-router-dom';

import {
  Provider,
} from 'react-redux';
import {
  HomePage,
  LoginPage,
  WatchList,
  TopMovies,
} from './screens';

import configureStore from './store';

const store = configureStore();

const App = () => (
  <Provider store={store}>
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/watch-list" component={WatchList} />
        <Route exact path="/top-movies" component={TopMovies} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

ReactDOM.render(<App />, document.getElementById('app'));
