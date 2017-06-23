import React from 'react';
import _ from 'lodash';
import './Home.css';
import ExerciseCircle from '../common/ExerciseCircle';
import { connect } from 'react-redux';
import { addWorkout, removeWorkout } from '../../state/actions/workouts';
import styled from 'styled-components';

const WorkoutCategory = styled.div`
  display: inline-block;
  padding: 1em;
`;

const ChosenWorkouts = styled.div`
`;

const mapStateToProps = state => ({
  legs: state.workouts.legs,
  chest: state.workouts.chest,
  back: state.workouts.back,
  arms: state.workouts.arms,
  selectedWorkouts: state.workouts.selectedWorkouts,
});

const mapDispatchToProps = dispatch => ({
  addWorkout: workout => dispatch(addWorkout(workout)),
  removeWorkout: workout => dispatch(removeWorkout(workout)),
});

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedCategory: 'legs',
    };

    this.onClickExercise = this.onClickExercise.bind(this);
    this.onClickExerciseCategory = this.onClickExerciseCategory.bind(this);
  }

  onClickExercise(workout) {
    this.props.addWorkout(workout);
  }

  onClickExerciseCategory(selectedCategory) {
    this.setState({
      selectedCategory,
    });
  }

  renderChosenWorkouts() {
    const { selectedWorkouts, removeWorkout } = this.props;

    return _.map(selectedWorkouts, (workout, index) => (
      <ExerciseCircle
        title={workout.name}
        onClick={() => removeWorkout(workout)}
        key={index}
        color={'#70b8e2'}
      />
    ));
  }

  renderSelectedCategory() {
    const { selectedCategory } = this.state;

    return this.props[selectedCategory].map((exercise, index) => (
      <ExerciseCircle
        title={exercise.name}
        onClick={() => this.onClickExercise(exercise)}
        key={index}
      />
    ));
  }

  render() {
    return (
      <div className="home-page-container">
        <div className="home-header-container">
          <h2>
            Track your strength
          </h2>
          <ChosenWorkouts>
            {this.renderChosenWorkouts()}
          </ChosenWorkouts>
          <WorkoutCategory onClick={() => this.onClickExerciseCategory('legs')}>
            {'Legs'}
          </WorkoutCategory>
          <WorkoutCategory onClick={() => this.onClickExerciseCategory('chest')}>
            {'Chest'}
          </WorkoutCategory>
          <WorkoutCategory onClick={() => this.onClickExerciseCategory('back')}>
            {'Back'}
          </WorkoutCategory>
          <WorkoutCategory onClick={() => this.onClickExerciseCategory('arms')}>
            {'Arms'}
          </WorkoutCategory>
          {this.renderSelectedCategory()}

        </div>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
