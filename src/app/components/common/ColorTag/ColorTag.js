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
