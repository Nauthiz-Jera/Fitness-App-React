import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorCircle from './ColorCircles';
import styled from 'styled-components';

const ColorTagContainer = styled.div`
  align-content: center;
  align-items: center;
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-around;
  background-color: #635595;
`;

const COLORS = [
  {
    color: '#A3E583',
  },
  {
    color: '#88E5E1',
  },
  {
    color: '#88A4E5',
  },
  {
    color: '#B886E5',
  },
  {
    color: '#E586E2',
  },
];

class ColorTag extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  onClickCircle(color) {
    const { onClick } = this.props;
    onClick(color);
  }

  render() {
    const { workoutColor } = this.props;
    return (
      <ColorTagContainer>
        {COLORS.map((element, index) => (
          <ColorCircle
            color={element.color}
            onClick={() => this.onClickCircle(element.color)}
            active={workoutColor === element.color}
            key={index}
          />
        ))}
      </ColorTagContainer>
    );
  }
}

export default ColorTag;
