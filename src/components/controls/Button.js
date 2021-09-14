import React from 'react';
import { Button as MuiButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },

  label: {
    textTransform: 'none',
  },
}));

export const Button = (props) => {
  const { variant, name, onChange, size, color, ...other } = props;
  const classes = useStyles();

  return (
    <MuiButton
      variant={variant || 'contained'}
      size={size || 'large'}
      onChange={onChange}
      color={color || 'primary'}
      {...other}
      classes={{ root: classes.root, label: classes.label }}
    >
      {name}
    </MuiButton>
  );
};
