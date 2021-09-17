import {
  Dialog,
  DialogContent,
  DialogTitle,
  makeStyles,
  Typography,
} from '@material-ui/core';

import CloseIcon from '@material-ui/icons/Close';
import Controls from './Controls';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiDialog-paper': {
      padding: theme.spacing(2),
    },
  },
}));

export const PopupDialog = (props) => {
  const { onClose, open, title, ...other } = props;
  const classes = useStyles();
  return (
    <Dialog
      className={classes.root}
      maxWidth="md"
      open={open}
      onClose={onClose}
    >
      <DialogTitle>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Typography variant="h6" component="div" style={{ flexGrow: '1' }}>
            {title}
          </Typography>
          <Controls.SquareButton color="secondary" onClick={onClose}>
            <CloseIcon fontSize="small" />
          </Controls.SquareButton>
        </div>
      </DialogTitle>
      <DialogContent dividers>{props.children}</DialogContent>
    </Dialog>
  );
};
