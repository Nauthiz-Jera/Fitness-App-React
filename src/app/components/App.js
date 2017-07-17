import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../state/store';
import styled from 'styled-components';
import CreatePlan from './createPlan/createPlan';
import CreateWorkout from './createWorkout/CreateWorkout';
import ChooseExercises from './chooseExercises/ChooseExercises';

const MainContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  height: 100vh;
  width: 100%;
  display: block;
  background: #342E4B;
`;

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <MainContainer>
            <div className="container">
              <div className="route-container">
                <Switch>
                  <Route exact path="/" component={CreatePlan} />
                  <Route exact path="/create-workout" component={CreateWorkout} />
                  <Route path="/choose-exercises" component={ChooseExercises} />
                </Switch>
              </div>
            </div>
          </MainContainer>
        </Router>
      </Provider>
    );
  }
}

export default App;
