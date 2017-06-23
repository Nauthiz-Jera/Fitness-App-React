import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import ChooseExercises from './chooseExercises/ChooseExercises';
import CreateWorkout from './createWorkout/CreateWorkout';
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
                <Route exact path="/" component={ChooseExercises} />
                <Route exact path="/createWorkout" component={CreateWorkout} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
