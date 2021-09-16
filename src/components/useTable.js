import {
  makeStyles,
  Table,
  TableContainer as MuiTableContainer,
  TablePagination,
  TableSortLabel,
} from '@material-ui/core';
import React, { useState } from 'react';
import {
  TableCell,
  TableHead as MuiTableHead,
  TableRow,
  TableBody as MuiTableBody,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  table: {
    marginTop: theme.spacing(3),
    '& thead th': {
      fontWeight: '600',
      color: theme.palette.primary.main,
      backgroundColor: theme.palette.primary.light,
    },
    '& tbody td': {
      fontWeight: '300',
    },
    '& tbody tr:hover': {
      backgroundColor: '#fffbf2',
      cursor: 'pointer',
    },
  },
}));

export const useTable = (records, headCells, searchFn) => {
  const classes = useStyles();
  const rowsPerPagesOptions = [5, 10, 15];

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(rowsPerPagesOptions[page]);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState(Object.keys(headCells)[0]);

  function handleChangePage(e, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(e) {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  }

  function rowsAfterPagingAndSorting() {
    return searchFn
      .fn(records)
      .sort((a, b) => {
        if (order === 'asc') return a[orderBy] > b[orderBy] ? 1 : -1;
        if (order === 'desc') return a[orderBy] < b[orderBy] ? 1 : -1;
      })
      .slice(page * rowsPerPage, (page + 1) * rowsPerPage);
  }

  const TableContainer = (props) => {
    return (
      <>
        <MuiTableContainer className={classes.table}>
          <Table>{props.children}</Table>
        </MuiTableContainer>
        <TablePagination
          rowsPerPageOptions={rowsPerPagesOptions}
          component="div"
          count={records.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </>
    );
  };

  const TableHead = (props) => {
    function handleRequestSort(property) {
      const isAsc = orderBy === property && order === 'asc';
      setOrder(isAsc ? 'desc' : 'asc');
      setOrderBy(property);
    }

    return (
      <MuiTableHead>
        <TableRow>
          {headCells.map((headCell) => (
            <>
              <TableCell key={headCell.id}>
                <TableSortLabel
                  active={orderBy === headCell.id}
                  direction={orderBy === headCell.id ? order : 'asc'}
                  onClick={(e) => handleRequestSort(headCell.id)}
                >
                  {headCell.label}
                </TableSortLabel>
              </TableCell>
            </>
          ))}
        </TableRow>
      </MuiTableHead>
    );
  };

  const TableBody = (props) => {
    return (
      <MuiTableBody>
        {rowsAfterPagingAndSorting().map((item) => (
          <TableRow key={item.id}>
            {headCells.map((headCell) => (
              <TableCell>{item[headCell.id]}</TableCell>
            ))}
          </TableRow>
        ))}
      </MuiTableBody>
    );
  };

  return { TableContainer, TableHead, TableBody };
};
