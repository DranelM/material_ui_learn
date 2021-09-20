import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from '@material-ui/core';
import React from 'react';
import Controls from './Controls';
import CloseIcon from '@material-ui/icons/Close';
import CheckIcon from '@material-ui/icons/Check';

export const DeleteDialog = (props) => {
  const { isDeleteOpen, handlePopupClose, confirmDelete, title } = props;

  return (
    <Dialog open={isDeleteOpen} onClose={handlePopupClose}>
      <DialogTitle>
        <Typography variant="h6">{title}</Typography>
      </DialogTitle>
      <DialogContent align="center">
        <Controls.SquareButton color="primary" onClick={confirmDelete}>
          <CheckIcon fontSize="small" />
        </Controls.SquareButton>
        <Controls.SquareButton color="secondary" onClick={handlePopupClose}>
          <CloseIcon fontSize="small" />
        </Controls.SquareButton>
      </DialogContent>
    </Dialog>
  );
};
