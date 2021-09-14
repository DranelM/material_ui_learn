import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from '@material-ui/core';
import React from 'react';

export const Checkbox = (props) => {
  const { name, value, onChange, label } = props;
  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox checked={value} onChange={onChange} name={name} />}
          label={label}
        />
      </FormGroup>
    </FormControl>
  );
};
