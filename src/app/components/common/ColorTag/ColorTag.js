import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ColorCircle from './ColorCircles';
import styled from 'styled-components';

const ColorTagContainer = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  justify-content: space-between;
`;

const COLORS = [
  {
    color: 'blue',
  },
  {
    color: 'red',
  },
  {
    color: 'green',
  },
  {
    color: 'yellow',
  },
  {
    color: 'purple',
  },
  {
    color: 'teal',
  },
  {
    color: 'orange',
  },
];

class ColorTag extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);

    this.state = {
      selectedColor: '',
    };

    this.onClickCircle = this.onClickCircle.bind(this);
  }

  onClickCircle(color) {
    const { onClick } = this.props;

    this.setState({
      selectedColor: color,
    });

    onClick(color);
  }

  render() {
    const { selectedColor } = this.state;
    return (
      <ColorTagContainer>
        {COLORS.map((element, index) => (
          <ColorCircle
            color={element.color}
            onClick={() => this.onClickCircle(element.color)}
            active={selectedColor === element.color}
            key={index}
          />
        ))}
      </ColorTagContainer>
    );
  }
}

export default ColorTag;
