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

const PageTitle = styled.h2`
  color: white;
`;

const BasicButton = styled.div`
  align-items: center;
  color: #51AAE1;
  display: flex;
  height: 100%;
  font-size: 25px;
  justify-content: center;
  &:hover{
    cursor: pointer;
  }
`;

const WorkoutCategory = styled.div`
  display: inline-block;
  padding: 1em;
  color: white;
`;

const ChooseExercises = styled.div`
  display: block;
  float: right;
  right: 25px;
  position: absolute;
  color: #32CD32;
  top: 0px;
`;

const ChosenWorkouts = styled.div`
`;

const mapStateToProps = state => ({
  arms: state.exercise.arms,
  back: state.exercise.back,
  chest: state.exercise.chest,
  legs: state.exercise.legs,
  selectedExercises: state.exercise.selectedExercises,
});

const mapDispatchToProps = dispatch => ({
  addExercise: (exercise, category) => dispatch(addExercise(exercise, category)),
  removeExercise: (exercise, category) => dispatch(removeExercise(exercise, category)),
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

  onClickExercise(exercise, selectedCategory) {
    this.props.addExercise(exercise, selectedCategory);
  }

  onClickExerciseCategory(selectedCategory) {
    this.setState({
      selectedCategory,
    });
  }

  renderChosenWorkouts() {
    const { selectedExercises, removeExercise } = this.props;
    const { selectedCategory } = this.state;

    return _.map(selectedExercises, (exercise, index) => (
      <ExerciseCircle
        title={exercise.name}
        onClick={() => removeExercise(exercise, selectedCategory)}
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
        onClick={() => this.onClickExercise(exercise, selectedCategory)}
        key={index}
      />
    ));
  }

  render() {
    return (
      <div>
        <div>
          <PageTitle>
            Track your strength
          </PageTitle>
          <ChooseExercises onClick={() => {}}>
            <NavLink to="/create-workout">
              <BasicButton>
                ✔
              </BasicButton>
            </NavLink>
          </ChooseExercises>
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
