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

const WEEKDAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

class DaySelector extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      selectedDay: '',
    };
  }

  onClickSelectDay(day) {
    this.setState({ selectedDay: day });
    this.props.onClick(day);
  }

  render() {
    const { selectedDay } = this.state;
    return (
      <Container>
        {WEEKDAYS.map((day, index) => (
          <Days
            onClick={() => this.onClickSelectDay(day)}
            name={day}
            key={index}
            active={selectedDay === day}
          />
        ))}
      </Container>
    );
  }
}

export default DaySelector;
