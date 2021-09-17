import React from 'react';
import { makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: (props) => ({
    border: `1px solid ${theme.palette[props.color].main}`,
    background: theme.palette[props.color].light,
    minWidth: '0px',
    margin: theme.spacing(0.5),
    '& .MuiSvgIcon-root': {
      color: theme.palette[props.color].main,
    },
    '& .MuiButton-label': {
      pointerEvents: 'none',
    },
  }),
}));

export const SquareButton = (props) => {
  const { color = 'primary', ...other } = props;
  const classes = useStyles({ color });
  return (
    <Button className={classes.root} {...other}>
      {props.children}
    </Button>
  );
};
