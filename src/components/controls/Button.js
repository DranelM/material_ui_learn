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
  const { variant, name, onClick, size, color, ...other } = props;
  const classes = useStyles();

  return (
    <MuiButton
      onClick={onClick}
      classes={{ root: classes.root, label: classes.label }}
      variant={variant || 'contained'}
      size={size || 'large'}
      color={color || 'primary'}
      {...other}
    >
      {name}
    </MuiButton>
  );
};
