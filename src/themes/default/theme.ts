import { createTheme } from '@mui/material';

const palette = {
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
};

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
  palette,
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)' // Replace with your desired color
          },
          '& > .MuiLoadingButton-loadingIndicator': {
            color: palette.primary.main
          }
        }
      }
    },
    MuiCssBaseline: {
      styleOverrides: {
        '.MuiOutlinedInput-root': {
          // backgroundColor: palette.white.main,
          '& input': {
            fontWeight: 600,
            color: palette.white.main
          },
          '& fieldset': {
            borderColor: palette.white.main // Default border color
          },
          '&:hover fieldset': {
            borderColor: 'blue' // Border color on hover
          },
          '&.Mui-focused fieldset': {
            borderColor: 'red' // Border color when focused
          }
        },
        body: {
          backgroundColor: palette.midnight.main,
          marginBottom: '3.5rem'
        },
        a: {
          color: 'white',
          '&:hover': {
            color: palette.primary.main
          }
        }
      }
    }
  },
  cssVariables: {}
});
