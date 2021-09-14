import React from 'react';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';

export const DatePicker = (props) => {
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
    <MuiPickersUtilsProvider utils={DateFnsUtils} variant="outlined">
      <KeyboardDatePicker
        disableToolbar
        variant="inline"
        inputVariant="outlined"
        format="MMM/dd/yyyy"
        label={label}
        value={value}
        onChange={(e) => onChange(convertOutputToOnchangeAtrs(name, e))}
        KeyboardButtonProps={{
          'aria-label': 'change date',
        }}
      />
    </MuiPickersUtilsProvider>
  );
};
