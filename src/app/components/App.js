import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import Home from './home/Home';
import Nav from './navigation/Nav';
import store from '../state/store';

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <Nav />
            <div className="route-container">
              <Switch>
                <Route exact path="/" component={Home} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
