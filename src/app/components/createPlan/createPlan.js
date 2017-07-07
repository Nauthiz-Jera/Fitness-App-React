import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const NewPlanButton = styled.div`
  width: 85%;
  display: flex;
  height: 25px;
  background: rgb(57, 184, 125);
  margin: 15px auto;
  justify-content: center;
  align-content: center;
  align-items: center;
  align-text: center;
`;

class CreatePlan extends Component {
  render() {
    return (
      <div>
        <NewPlanButton>
          <NavLink to="/create-workout">
            New Workout Plan!
          </NavLink>
        </NewPlanButton>
      </div>
    );
  }
}

export default CreatePlan;
