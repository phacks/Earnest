import React from 'react';
import ReactDOM from 'react-dom';
import reducer from './reducer';
import { compose, createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import { EarnestContainer } from './components/Earnest';
import Home from './components/Home';
import UpNext from './components/UpNext';
import Scenes from './components/Scenes';
import Characters from './components/Characters';
import MyAccount from './components/MyAccount';

const createStoreDevTools = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)(createStore);
const store = createStoreDevTools(combineReducers({
    reducer,
    routing: routerReducer
  }));

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(hashHistory, store)

import 'tachyons/css/tachyons.css';

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={EarnestContainer}>
        <Route path="home" component={Home}/>
        <Route path="up-next" component={UpNext}/>
        <Route path="scenes" component={Scenes}/>
        <Route path="characters" component={Characters}/>
        <Route path="my-account" component={MyAccount}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);
