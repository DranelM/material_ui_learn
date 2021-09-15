import React, { useState } from 'react';
import PageHeader from './PageHeader';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import EmployeeForm from './EmployeeForm';
import { makeStyles, Paper, TableCell, TableRow } from '@material-ui/core';
import { useTable } from './useTable';
import * as employeeServices from '../services/employeeService';

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(3),
    padding: theme.spacing(3),
  },
}));

const headCells = [
  {
    id: 'fullName',
    label: 'Full Name',
  },
  {
    id: 'email',
    label: 'Email Address',
  },
  {
    id: 'mobile',
    label: 'Mobile Number',
  },
  {
    id: 'departmentId',
    label: 'Department',
  },
  {
    id: 'city',
    label: 'City',
  },
];

export const Employees = () => {
  const classes = useStyles();
  const [records, setRecords] = useState(employeeServices.getAllEmployees());
  const { TableContainer, TableHead, TableBody } = useTable(records, headCells);

  return (
    <>
      <PageHeader
        title="Full Name"
        subtitle="Guys character"
        icon={<PlayArrowIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <TableContainer>
          <TableHead />
          <TableBody />
        </TableContainer>
      </Paper>
    </>
  );
};
