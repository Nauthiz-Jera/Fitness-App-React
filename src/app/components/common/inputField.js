import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`
  display: block;
  height: 100%;
  width: 100%;
  text-align: center;
  background-color: #635595;
  border: 0;
`;

class InputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: props.text,
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.setState({
      userInput: event.target.value,
    });

    this.props.callback(event.target.value);
  }

  render() {
    const { placeholder } = this.props;
    return (
      <Input
        onChange={this.onChange}
        type="text"
        placeholder={placeholder}
        value={this.state.userInput}
      />
    );
  }
}

InputField.propTypes = {
  placeholder: PropTypes.string.isRequired,
};

export default InputField;
