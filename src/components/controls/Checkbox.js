import {
  FormControl,
  FormControlLabel,
  Checkbox as MuiCheckbox,
} from '@material-ui/core';
import React from 'react';

export const Checkbox = (props) => {
  const { name, label, value, onChange } = props;

  function convertOutputToOnchangeAtrs(name, value) {
    return {
      target: {
        name,
        value,
      },
    };
  }

  return (
    <FormControl>
      <FormControlLabel
        control={
          <MuiCheckbox
            checked={value}
            onChange={(e) =>
              onChange(convertOutputToOnchangeAtrs(name, e.target.checked))
            }
            name={name}
          />
        }
        label={label}
      />
    </FormControl>
  );
};
