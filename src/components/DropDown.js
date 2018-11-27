import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';

const DropDown = ({
  handleChange, className, options, selectedValue,
}) => (
  <Select className={className} onChange={handleChange} options={options} value={selectedValue} />
);

export default DropDown;

DropDown.propTypes = {
  className: PropTypes.string,
  handleChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  selectedValue: PropTypes.shape({}),
};

DropDown.defaultProps = {
  className: '',
  selectedValue: {},
};
