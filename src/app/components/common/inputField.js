import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  display: block;
  height: 100%;
  width: 100%;
  text-align: center;
  background-color: rgb(43,217,211);
  border: 0;
`;

class InputField extends Component {
  render() {
    const { placeholder } = this.props;
    return <Input placeholder={placeholder} />;
  }
}

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default InputField;
