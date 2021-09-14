import { Card, makeStyles, Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    background: '#fdfdff',
  },
  pageHeader: {
    padding: theme.spacing(4),
    display: 'flex',
    // margin: theme.spacing(2),
  },
  pageIcon: {
    display: 'inline-block',
    padding: theme.spacing(2),
    background: '#e1f1ff',
  },
  pageTitle: {
    paddingLeft: theme.spacing(3),
    '& .MuiTypography-subtitle2': {
      opacity: '0.6',
    },
  },
}));

const PageHeader = (props) => {
  const { icon, title, subtitle } = props;
  const classes = useStyles();

  return (
    <Paper elevation={0} square className={classes.root}>
      <div className={classes.pageHeader}>
        <Card className={classes.pageIcon}>{icon}</Card>
        <div className={classes.pageTitle}>
          <Typography variant="h6">{title}</Typography>
          <Typography variant="subtitle2">{subtitle}</Typography>
        </div>
      </div>
    </Paper>
  );
};

export default PageHeader;
