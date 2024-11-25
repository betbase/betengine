import { Box, Button, Typography } from '@mui/material';
import { MoreHoriz } from '@mui/icons-material';
import { storage } from '@/appwrite';

export const MatchesFilter = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column'
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
        <Typography variant="h5" fontWeight={600}>
          Live Matches
        </Typography>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            columnGap: '0.5rem'
          }}>
          <Button color="primary" variant="outlined">
            All Tournaments
          </Button>
          <Button
            color="secondary"
            variant="outlined"
            sx={{
              gap: '0.5rem'
            }}>
            <img
              src={storage.getFileView(
                import.meta.env.VITE_APPWRITE_ASSETS_STORAGE_ID,
                'cs2-logo'
              )}
              style={{ height: '1.5rem' }}
            />
            Test Tournament
          </Button>
          <Button color="secondary" variant="outlined" sx={{}}>
            <MoreHoriz />
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
