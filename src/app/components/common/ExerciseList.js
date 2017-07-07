import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ExerciseItem = styled.li`
  list-style: none;
`;

class ExerciseList extends Component {
  static propTypes = {
    exercise: PropTypes.string,
  };

  render() {
    const { exercise } = this.props;
    return (
      <ExerciseItem>
        {exercise}
      </ExerciseItem>
    );
  }
}

export default ExerciseList;
