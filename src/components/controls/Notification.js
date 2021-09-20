import { Snackbar } from '@material-ui/core';
import MuiAlert from '@mui/material/Alert';
import React from 'react';
import styled from 'styled-components/macro';

const Alert = styled(({ ...other }) => (
  <MuiAlert elevation={6} auto {...other} />
))``;

const SnackBarWrapper = styled(({ ...other }) => (
  <Snackbar
    anchorOrigin={{ horizontal: 'right', vertical: 'top' }}
    autoHideDuration={6000}
    {...other}
  />
))`
  top: 5rem;
`;

export const Notification = (props) => {
  const {
    onClose,
    notificationData: { isOpen, type, message },
  } = props;

  return (
    <SnackBarWrapper open={isOpen} onClose={onClose}>
      <Alert onClose={onClose} severity={type}>
        {message}
      </Alert>
    </SnackBarWrapper>
  );
};
