import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Circle = styled.div`
	width: 40px;
	height: 40px;
	background: ${props => props.color || 'transparent'};
	border-radius: 20px;
	10px -10px 5px rgba(0,0,0,0.6);
	box-shadow: ${props => (props.active ? `5px 5px 5px 5px ${props.color}` : '0')};
	display: flex;
`;

class ColorCircles extends React.Component {
  render() {
    const { onClick, color, active } = this.props;
    return <Circle onClick={onClick} color={color} active={active} />;
  }
}

ColorCircles.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  color: PropTypes.string,
};

export default ColorCircles;
