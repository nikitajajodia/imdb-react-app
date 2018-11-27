import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  handleChange, className, value, type,
}) => (
  <input
    className={className}
    value={value}
    onChange={handleChange}
    type={type}
  />
);

export default TextInput;

TextInput.propTypes = {
  className: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  value: PropTypes.string,
  type: PropTypes.string,
};

TextInput.defaultProps = {
  className: '',
  value: '',
  type: '',
};
