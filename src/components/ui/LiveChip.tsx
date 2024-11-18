import { Chip, keyframes, styled, Typography, useTheme } from '@mui/material';
import { FiberManualRecord } from '@mui/icons-material';

export const LiveChip = () => {
  const theme = useTheme();

  return (
    <Chip
      icon={<PulsatingIcon />}
      label={
        <Typography variant="body2" component="span" fontWeight={600}>
          LIVE
        </Typography>
      }
      color="error"
      variant="filled"
      sx={{
        backgroundColor: theme.palette.error.main,
        color: theme.palette.error.contrastText,
        borderRadius: 0,
        '&:hover': {
          backgroundColor: theme.palette.error.dark
        },
        '& .MuiChip-label': {
          display: 'flex',
          alignItems: 'center'
        }
      }}
    />
  );
};

// Define the pulsating animation
const pulse = keyframes`
    0% {
        opacity: 1;
    }
    50% {
        opacity: 0.5;
    }
    100% {
        opacity: 1;
    }
`;

// Create a styled FiberManualRecord icon with the pulsating animation
const PulsatingIcon = styled(FiberManualRecord)(({ theme }) => ({
  animation: `${pulse} 1.5s infinite`,
  marginRight: theme.spacing(0.5),
  fontSize: '0.8rem'
}));
