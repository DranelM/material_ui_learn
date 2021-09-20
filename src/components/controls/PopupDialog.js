import {
  Dialog,
  DialogContent,
  DialogTitle,
  Typography,
} from '@material-ui/core';
import styled from 'styled-components/macro';

import CloseIcon from '@material-ui/icons/Close';
import Controls from './Controls';

const MyDialog = styled(({ ...other }) => <Dialog maxWidth="md" {...other} />)`
  & .MuiDialog-paper {
    padding: 1rem;
  }
`;

const PopupTitle = styled(({ ...other }) => (
  <Typography variant="h6" component="div" {...other} />
))`
  flex-grow: 1;
`;

const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SquareButton = styled(({ ...other }) => (
  <Controls.SquareButton color="secondary" {...other}></Controls.SquareButton>
))``;

export const PopupDialog = (props) => {
  const { onClose, open, title } = props;
  return (
    <MyDialog open={open} onClose={onClose}>
      <DialogTitle>
        <HeaderWrapper>
          <PopupTitle>{title}</PopupTitle>
          <SquareButton onClick={onClose}>
            <CloseIcon fontSize="small" />
          </SquareButton>
        </HeaderWrapper>
      </DialogTitle>
      <DialogContent dividers>{props.children}</DialogContent>
    </MyDialog>
  );
};
