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

import AddIcon from '@material-ui/icons/Add';
import SearchIcon from '@material-ui/icons/Search';
import CloseIcon from '@material-ui/icons/Close';
import EditIcon from '@material-ui/icons/Edit';

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
  {
    id: 'actions',
    label: 'Actions',
    disabled: true,
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
  addButton: {
    position: 'absolute',
    right: '10px',
  },
}));

export const Employees = () => {
  const classes = useStyles();
  const [records, setRecords] = useState(employeeServices.getAllEmployees());
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  const [isDeleteOpen, setIsDeleteOpen] = useState(false);
  const [valuesToEdit, setValuesToEdit] = useState({});
  const [idToDelete, setIdToDelete] = useState(-1);
  const [notificationData, setNotificationData] = useState({
    isOpen: false,
    message: '',
    type: '',
  });

  const [searchFn, setSearchFn] = useState({ fn: (items) => items });
  const { TableContainer, TableHead, TableBody, rowsAfterPagingAndSorting } =
    useTable(records, headCells, searchFn);

  function convertDepartmentToId(item) {
    let departmentsArray = employeeServices.getDepartmentCollection();
    let originalId = departmentsArray.find(
      (dep) => dep.title === item.departmentId
    ).id;
    item.departmentId = originalId;
    return item;
  }

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

  const handleNotificationOpen = (message, type) => {
    setNotificationData({ isOpen: true, message, type });
  };

  const handleCloseNotification = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setNotificationData({
      ...notificationData,
      isOpen: false,
    });
  };

  function handlePopupOpen() {
    setIsPopupOpen(true);
  }

  function handlePopupClose() {
    setIsEditOpen(false);
    setIsDeleteOpen(false);
    setValuesToEdit({});
    setIdToDelete(-1);
    setIsPopupOpen(false);
    setRecords(employeeServices.getAllEmployees());
  }

  function handleEditClick(item) {
    item = convertDepartmentToId(item);
    console.log(item);
    setValuesToEdit(item);
    setIsEditOpen(true);
  }

  function handleDeleteClick(item) {
    setIdToDelete(item.id);
    setIsDeleteOpen(true);
  }

  function confirmDelete() {
    employeeServices.deleteEmployeeById(idToDelete);
    handleNotificationOpen('Employee Deleted Successfully!', 'success');
    handlePopupClose();
  }

  return (
    <>
      <Controls.Notification
        notificationData={notificationData}
        onClose={handleCloseNotification}
      />
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
          <Controls.Button
            className={classes.addButton}
            variant="outlined"
            name="Add Employee"
            onClick={handlePopupOpen}
            startIcon={<AddIcon />}
            size="medium"
          />
          <Controls.PopupDialog
            open={isPopupOpen}
            onClose={handlePopupClose}
            title="Create New Employee"
          >
            <EmployeeForm handleNotificationOpen={handleNotificationOpen} />
          </Controls.PopupDialog>
        </Toolbar>
        <TableContainer>
          <TableHead />
          <TableBody
            onChange={handlePopupClose}
            deleteFunction={employeeServices.deleteEmployeeById}
          >
            {rowsAfterPagingAndSorting().map((item) => (
              <TableRow key={item.id}>
                {headCells.map((headCell) => [
                  headCell.id === 'actions' ? (
                    <TableCell>
                      <Controls.SquareButton
                        color="primary"
                        onClick={() => handleEditClick(item)}
                      >
                        <EditIcon fontSize="small" />
                      </Controls.SquareButton>
                      <Controls.SquareButton
                        color="secondary"
                        onClick={() => handleDeleteClick(item)}
                      >
                        <CloseIcon fontSize="small" />
                      </Controls.SquareButton>
                    </TableCell>
                  ) : (
                    <TableCell key={headCell.id}>{item[headCell.id]}</TableCell>
                  ),
                ])}
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
        <Controls.PopupDialog
          open={isEditOpen}
          onClose={handlePopupClose}
          title="Edit Employee Data"
        >
          <EmployeeForm
            handleNotificationOpen={handleNotificationOpen}
            valuesToEdit={valuesToEdit}
          />
        </Controls.PopupDialog>

        <Controls.DeleteDialog
          isDeleteOpen={isDeleteOpen}
          handlePopupClose={handlePopupClose}
          confirmDelete={confirmDelete}
          title="Are you sure you want to delete this employee?"
        />
      </Paper>
    </>
  );
};
