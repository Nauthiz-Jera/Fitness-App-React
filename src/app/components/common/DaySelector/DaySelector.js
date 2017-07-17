import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Days from './Days';

const Container = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
  width: 100%;
`;

const WEEKDAYS = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'];

class DaySelector extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  onClickSelectDay(day) {
    this.setState({ selectedDay: day });
    this.props.onClick(day);
  }

  render() {
    const { workoutDay } = this.props;
    return (
      <Container>
        {WEEKDAYS.map((day, index) => (
          <Days
            onClick={() => this.onClickSelectDay(day)}
            name={day}
            key={index}
            active={workoutDay === day}
          />
        ))}
      </Container>
    );
  }
}

export default DaySelector;
