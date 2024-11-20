import { Chip, Typography, useTheme } from '@mui/material';

export const ScheduledChip = () => {
  const theme = useTheme();

  return (
    <Chip
      label={
        <Typography variant="body2" component="span" fontWeight={600}>
          SCHEDULED
        </Typography>
      }
      color="primary"
      variant="outlined"
      sx={{
        color: theme.palette.white.main,
        borderColor: theme.palette.white.main,
        borderRadius: 0,
        '& .MuiChip-label': {
          display: 'flex',
          alignItems: 'center'
        }
      }}
    />
  );
};
