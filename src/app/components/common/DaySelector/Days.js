import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
	background: transparent;
	border: ${props => (props.active ? '1px solid #51AAE1' : 'none')};
	color: ${props => (props.active ? '#51AAE1' : 'gray')};
	height: 30px;
	width: 30px;
	border-radius: 30px;
	display: flex;
  align-self: center;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto;
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
