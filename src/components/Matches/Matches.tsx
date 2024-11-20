import { MatchItem } from '@/components/Matches/MatchItem.tsx';
import { Box } from '@mui/material';

export const Matches = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '1.5rem'
      }}>
      {[1, 2, 3].map((i) => (
        <MatchItem key={i} />
      ))}
    </Box>
  );
};
