import React from 'react';
import PageHeader from './PageHeader';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import EmployeeForm from './EmployeeForm';
import { makeStyles, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(3),
    padding: theme.spacing(3),
  },
}));

export const Employees = () => {
  const classes = useStyles();

  return (
    <>
      <PageHeader
        title="Full Name"
        subtitle="Guys character"
        icon={<PlayArrowIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <EmployeeForm />
      </Paper>
    </>
  );
};
