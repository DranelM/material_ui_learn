import { makeStyles } from '@material-ui/core';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiFormControl-root': {
      width: '80%',
      margin: theme.spacing(1),
    },
  },
}));

export const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  return { values, setValues, handleInputChange };
};

export const Form = (props) => {
  const classes = useStyles();

  return <form className={classes.root}>{props.children}</form>;
};
