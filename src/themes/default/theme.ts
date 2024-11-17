import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: ["'Space Grotesk'", 'sans-serif'].join(',')
  },
  shape: {
    borderRadius: 0
  },
  palette: {
    primary: {
      main: '#80BAD6'
    },
    text: {
      primary: '#FFFFFF',
      secondary: '#A9A9A9'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0D1426'
        }
      }
    }
  }
});
