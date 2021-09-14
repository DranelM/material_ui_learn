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

export const useForm = (
  initialValues,
  validateOnChange = false,
  validation
) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
    if (validateOnChange) validation({ [name]: value });
  }

  function resetForm(e) {
    setValues(initialValues);
    setErrors({});
  }

  return { values, setValues, handleInputChange, errors, setErrors, resetForm };
};

export const Form = (props) => {
  const classes = useStyles();
  const { children, ...other } = props;

  return (
    <form autoComplete="off" className={classes.root} {...other}>
      {children}
    </form>
  );
};
