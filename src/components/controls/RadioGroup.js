import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup as MuiRadioGroup,
} from '@material-ui/core';
import React from 'react';

export const RadioGroup = (props) => {
  const { name, label, value, items, onChange } = props;

  return (
    <FormControl>
      <FormLabel>{label}</FormLabel>
      <MuiRadioGroup row name={name} value={value}>
        {items.map((item) => (
          <FormControlLabel
            key={item.label}
            value={item.value}
            label={item.label}
            control={<Radio />}
            onChange={onChange}
          />
        ))}
      </MuiRadioGroup>
    </FormControl>
  );
};
