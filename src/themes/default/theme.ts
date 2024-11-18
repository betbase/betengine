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
    },
    yellow: {
      main: '#F2C94C'
    },
    midnight: {
      main: '#0D1426',
      light: 'rgba(255, 255, 255, 0.05)'
    },
    white: {
      main: '#FFFFFF'
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
  },
  cssVariables: {}
});
