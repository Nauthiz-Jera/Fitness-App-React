import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
	width: 40px;
	height: 40px;
	background: ${props => (props.active ? '#39ca84' : 'transparent')};
	border-radius: 20px;
	display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
`;

class Days extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
    active: PropTypes.bool.isRequired,
    name: PropTypes.string.isRequired,
  };

  render() {
    const { onClick, active, name } = this.props;
    return (
      <Container onClick={onClick} active={active}>
        {name}
      </Container>
    );
  }
}

export default Days;
