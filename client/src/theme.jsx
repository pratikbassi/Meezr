import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#6d6d6d",
      main: "#424242",
      dark: "#1b1b1b",
      contrastText: '#fff',
    },
    secondary: {
      light: "#f9683a",
      main: "#bf360c",
      dark: "#870000",
      contrastText: '#fff',
    },
  },
  auth: {
    
  }
});

export default theme;