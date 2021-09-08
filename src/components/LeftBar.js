import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  sideMenu: {
    display: 'flex',
    flexDirection: 'column',
    width: '320px',
    height: '100%',
    position: 'absolute',
    backgroundColor: '#192154',
  },
});

const LeftBar = () => {
  const classes = useStyles();

  return <div className={classes.sideMenu}></div>;
};

export default LeftBar;
