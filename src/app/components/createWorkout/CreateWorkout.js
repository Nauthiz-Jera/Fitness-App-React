import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';
import { addWorkout } from '../../state/actions/workout';
import InputField from '../common/inputField';
import ColorTag from '../common/ColorTag/ColorTag';
import DaySelector from '../common/DaySelector/DaySelector';
import ExerciseList from '../common/ExerciseList';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-around;
  padding-top: 15px;
  background: #352C55;
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

const PageTitle = styled.div`
  align-items: center;
  color: white;
  display: flex;
  height: 100%;
  font-size: 20px;
  justify-content: center;
`;

const WorkoutContainer = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  justify-content: center;
`;

const RadioButton = styled.div`
  align-content: center;
  align-item: center;
  display: flex;
  border-radius: 1em;
  border: 1px solid white;
  background: ${props => (props.active ? 'white' : 'transparent')};
  height: .75em;
  justify-content: center;
  width: .75em;
  margin: 5px 0;
`;

const FormContainer = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
  background: #4A3F6E;
  margin: 0 auto;
  width: 95%;
`;

const InputContainer = styled.div`
  height: 50px;
  width: 100%;
  border-bottom: 1px solid #322C4C;
`;

const ColorTagContainer = styled.div`
  margin-bottom: 15px;
  border-bottom: 1px solid #322C4C;
`;

const DaySelectContainer = styled.div`
  margin-bottom: 15px;
  border-bottom: 1px solid #322C4C;
`;

const InputTitle = styled.div`
  display: flex;
  justify-content: left;
  color: white;
`;

const DayList = styled.div`
  background-color: #635595;
  display: flex;
  justify-content: space-around;
  align-content: center;
  align-items: center
`;

const SelectedExercises = styled.ul`
  background-color: #635595;
  color: white;
  & > li {
    width: 100%;
    height: 25px;
    display: flex;
    align-items: center;
  }
`;

const AddExercisesBtn = styled.div`
  background-color: rgb(57, 184, 125);
  border-radius: 10px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  margin: 0 auto;
  width: 95%;
  text-decoration: none;
  &:hover{
    cursor: pointer;
  }
`;

const mapStateToProps = state => {
  return {
    selectedExercises: state.exercise.selectedExercises,
    workout: state.workout.workout,
  };
};

const mapDispatchToProps = dispatch => ({
  addWorkout: workout => dispatch(addWorkout(workout)),
});

class CreateWorkout extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      viewWorkout: 0,
    };

    this.onClickAddWorkout = this.onClickAddWorkout.bind(this);
  }

  renderSelectedExercises() {
    const { selectedExercises } = this.props;
    const { workout } = this.props;
    const { viewWorkout } = this.state;

    workout[viewWorkout].exercises = selectedExercises;

    return _.map(selectedExercises, (exercise, index) => (
      <ExerciseList exercise={exercise.name} key={index} />
    ));
  }

  onClickAddWorkout(workout) {
    this.props.addWorkout(workout);
    this.setState({ viewWorkout: this.state.viewWorkout++ });
    console.log('props: ', this.props);
  }

  renderWorkouts() {
    const { workout } = this.props;
    const { viewWorkout } = this.state;

    return workout.map((workout, index) => (
      <RadioButton active={viewWorkout === index} key={index} />
    ));
  }

  setColorTag(selectedColor) {
    const { workout } = this.props;
    const { viewWorkout } = this.state;

    workout[viewWorkout].colorTag = selectedColor;
  }

  setWorkoutDay(selectedDay) {
    const { workout } = this.props;
    const { viewWorkout } = this.state;

    workout[viewWorkout].workoutDay = selectedDay;
  }

  updatePlanName(currentWorkout) {
    return function(text) {
      currentWorkout.parent = text;
    };
  }

  updateWorkoutName(currentWorkout) {
    return function(text) {
      currentWorkout.name = text;
    };
  }

  render() {
    const { workout } = this.props;
    const { viewWorkout } = this.state;
    const currentWorkout = workout[viewWorkout];

    return (
      <div>
        <HeaderContainer>
          <NavLink to="/">
            <BasicButton>
              ⬅
            </BasicButton>
          </NavLink>
          <PageTitle>
            New Workout Plan
          </PageTitle>
          <BasicButton onClick={() => this.onClickAddWorkout(workout)}>
            ✔
          </BasicButton>
        </HeaderContainer>
        <InputContainer>
          <InputField
            callback={this.updatePlanName(currentWorkout)}
            placeholder={'Name Your Plan!'}
            text={currentWorkout.parent}
          />
        </InputContainer>
        <WorkoutContainer>
          {this.renderWorkouts()}
        </WorkoutContainer>
        <FormContainer>
          <InputContainer>
            <InputField
              callback={this.updateWorkoutName(currentWorkout)}
              placeholder={'Name Your Workout!'}
              text={currentWorkout.name}
            />
          </InputContainer>
          <InputTitle>
            COLOR TAG
          </InputTitle>
          <ColorTagContainer>
            <ColorTag
              workoutColor={currentWorkout.colorTag}
              onClick={color => this.setColorTag(color)}
            />
          </ColorTagContainer>
          <InputTitle>
            SELECT WORKOUT DAY
          </InputTitle>
          <DaySelectContainer>
            <DayList>
              <DaySelector
                workoutDay={currentWorkout.workoutDay}
                onClick={day => this.setWorkoutDay(day)}
              />
            </DayList>
          </DaySelectContainer>
          <InputTitle>
            EXERCISES
          </InputTitle>
          <SelectedExercises>
            {this.renderSelectedExercises()}
          </SelectedExercises>
        </FormContainer>
        <NavLink to="/choose-exercises">
          <AddExercisesBtn>
            Add Exercises!
          </AddExercisesBtn>
        </NavLink>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateWorkout);
