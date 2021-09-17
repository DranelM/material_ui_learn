import React, { useState } from 'react';
import PageHeader from './PageHeader';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import EmployeeForm from './EmployeeForm';
import {
  Grid,
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

import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';

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
    width: '100%',
  },
}));

export const Employees = () => {
  const classes = useStyles();
  const [records, setRecords] = useState(employeeServices.getAllEmployees());
  const [isPopupOpen, setIsPopupOpen] = useState(false);

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

  function handlePopupOpen() {
    setIsPopupOpen(true);
  }

  function handlePopupClose() {
    setIsPopupOpen(false);
    setRecords(employeeServices.getAllEmployees());
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
          <Grid container>
            <Grid item xs={10}>
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
            </Grid>
            <Grid item xs />
            <Grid item>
              <Controls.Button
                variant="outlined"
                name="Add Employee"
                onClick={handlePopupOpen}
                startIcon={<AddIcon />}
                size="small"
              />
              <Controls.PopupDialog
                open={isPopupOpen}
                onClose={handlePopupClose}
                title="Create New Employee"
              >
                <EmployeeForm />
              </Controls.PopupDialog>
            </Grid>
          </Grid>
        </Toolbar>
        <TableContainer>
          <TableHead />
          <TableBody
            editPopupTitle="Edit Employee Data"
            deletePopupTitle="Are you sure you want to delete this employee?"
            onChange={handlePopupClose}
            deleteFunction={employeeServices.deleteEmployeeById}
          />
        </TableContainer>
      </Paper>
    </>
  );
};
