import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import './CreatePlan.css';

const HeaderComponent = styled.div`
  display: flex;
  padding: 5px;
`;

const PageTitle = styled.h2`
  align-items: center;
  display: flex;
  color: white;
  margin: 0 auto;
  justify-content:center;
`;

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
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false,
    };
  }

  toggleMenu() {
    this.setState({ menuOpen: !this.state.menuOpen });
  }

  isActive() {
    return this.state.menuOpen ? 'open' : 'default';
  }

  render() {
    return (
      <div>
        <HeaderComponent>
          <div id="nav-icon4" className={this.isActive()} onClick={() => this.toggleMenu()}>
            <span />
            <span />
            <span />
          </div>
          <PageTitle>
            WORKOUT PLANS
          </PageTitle>
        </HeaderComponent>
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
