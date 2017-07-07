import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Circle = styled.div`
	width: 40px;
	height: 40px;
	background: ${props => props.color || 'transparent'};
	border-radius: 20px;
	box-shadow: ${props => (props.active ? `0px 0px 4px 4px ${convertHex(props.color, 50)}` : '0')};
	display: flex;
`;

class ColorCircles extends React.Component {
  render() {
    const { onClick, color, active } = this.props;
    return <Circle onClick={onClick} color={color} active={active} />;
  }
}

const convertHex = function(oldHex, opacity) {
  let hex = oldHex.replace('#', '');
  let r = parseInt(hex.substring(0, 2), 16);
  let g = parseInt(hex.substring(2, 4), 16);
  let b = parseInt(hex.substring(4, 6), 16);

  return 'rgba(' + r + ',' + g + ',' + b + ',' + opacity / 100 + ')';
};

ColorCircles.propTypes = {
  onClick: PropTypes.func.isRequired,
  active: PropTypes.bool.isRequired,
  color: PropTypes.string,
};

export default ColorCircles;
