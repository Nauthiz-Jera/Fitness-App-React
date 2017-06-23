import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	width: 100px;
	height: 100px;
	background: ${props => props.color || '#39ca84'};
	border-radius: 50px;
	display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

class ExerciseCircle extends Component {
  render() {
    const { title, onClick, color } = this.props;
    return (
      <Container onClick={onClick} color={color}>
        {title}
      </Container>
    );
  }
}

ExerciseCircle.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  color: PropTypes.string,
};

export default ExerciseCircle;
