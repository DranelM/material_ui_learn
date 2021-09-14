import React from 'react';
import {
  FormControl,
  FormHelperText,
  InputLabel,
  Select as MuiSelect,
} from '@material-ui/core';

export const Select = (props) => {
  const { name, value, label, options, onChange, error = null } = props;

  return (
    <FormControl variant="outlined" {...(error && { error: true })}>
      <InputLabel>{label}</InputLabel>
      <MuiSelect name={name} onChange={onChange} value={value} label={label}>
        <option value="">None</option>
        {options.map((option) => (
          <option key={option.title} value={option.title}>
            {option.title}
          </option>
        ))}
      </MuiSelect>
      {error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};
