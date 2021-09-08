import './App.css';
import LeftBar from '../components/LeftBar';
import {
  createTheme,
  CssBaseline,
  makeStyles,
  MuiThemeProvider,
} from '@material-ui/core';
import NavigationBar from '../components/NavigationBar';
import PageHeader from './PageHeader';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

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
        <PageHeader
          title="Page title"
          subtitle="Page description"
          icon={<PlayArrowIcon />}
        />
      </div>
      <CssBaseline />
    </MuiThemeProvider>
  );
}

export default App;
