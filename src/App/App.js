import './App.css';
import LeftBar from '../components/LeftBar';
import {
  createTheme,
  CssBaseline,
  makeStyles,
  MuiThemeProvider,
} from '@material-ui/core';
import NavigationBar from '../components/NavigationBar';
import { Employees } from '../components/Employees';

const theme = createTheme({
  palette: {
    primary: {
      main: '#dc3d3d',
      light: '#000',
    },
    secondary: {
      main: '#473ddc',
      light: '#000',
    },
    background: {
      default: '#f4f5fd',
    },
  },

  overrides: {
    MuiAppBar: {
      root: {
        transform: 'translateZ(0)',
      },
    },
  },
});

const useStyles = makeStyles({
  appMain: { paddingLeft: '320px', width: '100%' },
});

function App() {
  const classes = useStyles();

  return (
    <MuiThemeProvider theme={theme}>
      <LeftBar />
      <div className={classes.appMain}>
        <NavigationBar />
        <Employees />
      </div>
      <CssBaseline />
    </MuiThemeProvider>
  );
}

export default App;
