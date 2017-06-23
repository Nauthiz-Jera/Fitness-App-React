//import libraries first
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import _ from 'lodash';
//import project components next:
// Actions
// Components
// CSS
import { addExercise, removeExercise } from '../../state/actions/exercise';
import ExerciseCircle from '../common/ExerciseCircle';
import './ChooseExercises.css';

const WorkoutCategory = styled.div`
  display: inline-block;
  padding: 1em;
`;

const CreateWorkout = styled.div`
  display: block;
  float: right;
  right: 25px;
  position: absolute;
  top: 0px;
`;

const ChosenWorkouts = styled.div`
`;

const mapStateToProps = state => ({
  arms: state.workouts.arms,
  back: state.workouts.back,
  chest: state.workouts.chest,
  legs: state.workouts.legs,
  selectedExercises: state.workouts.selectedExercises,
});

const mapDispatchToProps = dispatch => ({
  addExercise: exercise => dispatch(addExercise(exercise)),
  removeExercise: exercise => dispatch(removeExercise(exercise)),
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

  onClickExercise(exercise) {
    this.props.addExercise(exercise);
  }

  onClickExerciseCategory(selectedCategory) {
    this.setState({
      selectedCategory,
    });
  }

  renderChosenWorkouts() {
    const { selectedExercises, removeExercise } = this.props;

    return _.map(selectedExercises, (exercise, index) => (
      <ExerciseCircle
        title={exercise.name}
        onClick={() => removeExercise(exercise)}
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
          <CreateWorkout onClick={() => {}}>
            <NavLink to="/createWorkout">
              +
            </NavLink>
          </CreateWorkout>
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
