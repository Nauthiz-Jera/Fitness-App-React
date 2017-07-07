import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import _ from 'lodash';
import InputField from '../common/inputField';
import ColorTag from '../common/ColorTag/ColorTag';
import DaySelector from '../common/DaySelector/DaySelector';
import ExerciseList from '../common/ExerciseList';
import Nav from '../navigation/Nav';

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
  margin-bottom: 15px;
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
  };
};

class CreateWorkout extends React.Component {
  renderSelectedExercises() {
    return _.map(this.props.selectedExercises, (exercise, index) => (
      <ExerciseList exercise={exercise.name} key={index} />
    ));
  }

  render() {
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
          <BasicButton onClick={() => {}}>
            ✔
          </BasicButton>
        </HeaderContainer>
        <InputContainer>
          <InputField placeholder="Name Your Plan" />
        </InputContainer>
        <FormContainer>
          <InputContainer>
            <InputField placeholder="Workout Name" />
          </InputContainer>
          <InputTitle>
            COLOR TAG
          </InputTitle>
          <ColorTagContainer>
            <ColorTag onClick={() => {}} />
          </ColorTagContainer>
          <InputTitle>
            SELECT WORKOUT DAY
          </InputTitle>
          <DaySelectContainer>
            <DayList>
              <DaySelector onClick={() => {}} />
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

export default connect(mapStateToProps)(CreateWorkout);
