import { LiveMatch } from '@/components/LiveMatch/LiveMatch';
import { Matches } from '@/components/Matches/Matches';
import { Box } from '@mui/material';

export const HomePage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '1rem'
      }}>
      <LiveMatch />
      <Matches />
    </Box>
  );
};
