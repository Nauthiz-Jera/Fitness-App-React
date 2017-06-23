import React from 'react';
import styled from 'styled-components';
import '../chooseExercises/ChooseExercises.css';
import { connect } from 'react-redux';
import InputField from '../common/inputField';
import ColorTag from '../common/ColorTag/ColorTag';
import DaySelector from '../common/DaySelector/DaySelector';

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
`;

const FormContainer = styled.div`
  display: flex;
  padding: 15px;
  flex-direction: column;
`;

const InputContainer = styled.div`
  height: 50px;
  width: 100%;
  padding: 1em 0;
`;

class CreateWorkout extends React.Component {
  render() {
    return (
      <div className="home-page-container">
        <HeaderContainer>
          <div>
            {'<----'}
          </div>
          <div>
            New Workout Plan
          </div>
          <div>
            {'Complete'}
          </div>
        </HeaderContainer>
        <FormContainer>
          <InputContainer>
            <InputField placeholder="Name Your Plan" />
          </InputContainer>
          <InputContainer>
            <InputField placeholder="Workout Name" />
          </InputContainer>
          <ColorTag onClick={() => {}} />
        </FormContainer>
        <DaySelector onClick={() => {}} />
      </div>
    );
  }
}

export default connect()(CreateWorkout);
