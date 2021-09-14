import React from 'react';
import { TextField } from '@material-ui/core';

export const InputField = (props) => {
  const { name, label, value, onChange } = props;
  return (
    <TextField
      autoComplete="off"
      variant="outlined"
      label={label}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};
