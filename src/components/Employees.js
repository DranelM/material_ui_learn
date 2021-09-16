import React, { useState } from 'react';
import PageHeader from './PageHeader';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import EmployeeForm from './EmployeeForm';
import {
  InputAdornment,
  makeStyles,
  Paper,
  TableCell,
  TableRow,
  Toolbar,
} from '@material-ui/core';
import { useTable } from './useTable';
import * as employeeServices from '../services/employeeService';
import Controls from './controls/Controls';

import SearchIcon from '@material-ui/icons/Search';

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

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(3),
    padding: theme.spacing(3),
  },
  searchPanel: {
    width: '75%',
  },
}));

export const Employees = () => {
  const classes = useStyles();
  const [records, setRecords] = useState(employeeServices.getAllEmployees());
  const [searchFn, setSearchFn] = useState({ fn: (items) => items });
  const { TableContainer, TableHead, TableBody } = useTable(
    records,
    headCells,
    searchFn
  );

  function handleSearch(e) {
    setSearchFn({
      fn: (items) => {
        if (e.target.value === '') {
          return items;
        } else {
          return items.filter((item) =>
            item.fullName.toLowerCase().includes(e.target.value.toLowerCase())
          );
        }
      },
    });
  }

  return (
    <>
      <PageHeader
        title="Full Name"
        subtitle="Guys character"
        icon={<PlayArrowIcon fontSize="large" />}
      />
      <Paper className={classes.pageContent}>
        <Toolbar>
          <Controls.InputField
            className={classes.searchPanel}
            label="Search employee"
            onChange={handleSearch}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon fontSize="small" />
                </InputAdornment>
              ),
            }}
          />
        </Toolbar>
        <TableContainer>
          <TableHead />
          <TableBody />
        </TableContainer>
      </Paper>
    </>
  );
};
