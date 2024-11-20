import { createTheme } from '@mui/material';

export const theme = createTheme({
  typography: {
    fontFamily: ["'Space Grotesk'", 'sans-serif'].join(','),
    h6: {
      lineHeight: 1.25,
      '@media (max-width:600px)': {
        fontSize: '1.125rem'
      }
    },
    body1: {
      fontSize: '0.875rem',
      lineHeight: 1.25
    },
    body2: {
      fontSize: '0.75rem'
    }
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
      dark: '#182031',
      light: '#252B3C'
    },
    white: {
      main: '#FFFFFF'
    }
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: '#0D1426',
          marginBottom: '3.5rem'
        },
        a: {
          color: 'white',
          '&:hover': {
            color: '#80BAD6'
          }
        }
      }
    }
  },
  cssVariables: {}
});
