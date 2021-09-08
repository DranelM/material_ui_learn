import { Card, makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#fdfdff',
  },
  pageHeader: {
    padding: theme.spacing(4),
    display: 'flex',
    margin: theme.spacing(2),
  },
}));

const PageHeader = (props) => {
  const { icon, title, subtitle } = props;
  const classes = useStyles();

  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Card>{icon}</Card>
        <div>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="subtitle2">{subtitle}</Typography>
        </div>
      </div>
    </Paper>
  );
};

export default PageHeader;
