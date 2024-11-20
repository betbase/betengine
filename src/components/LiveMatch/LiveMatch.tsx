import {
  Box,
  Button,
  Grid2 as Grid,
  IconButton,
  styled,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { TwitchPlayer } from 'react-twitch-embed';
import { LiveChip } from '@/components/ui/LiveChip.tsx';

export const LiveMatch = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        margin: '1rem 0',
        backgroundColor: theme.palette.midnight.dark
      }}>
      <LiveMatchHeader>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            gap: '1rem'
          }}>
          <LiveChip />
          <Typography variant="h6" fontWeight={600}>
            2022 QH Sports Dota 2 Series 3 - Team 1 vs. Team 2
          </Typography>
        </Box>
        <Box>
          <Tooltip title="Add to favourites">
            <IconButton
              sx={{
                color: theme.palette.yellow.main
              }}>
              <StarOutlineIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </LiveMatchHeader>

      <Grid container spacing={2} padding={2}>
        <Grid size={{ xs: 12, lg: 6 }}>
          {/*<TwitchPlayer*/}
          {/*  channel="hasanabi"*/}
          {/*  parent={['localhost']}*/}
          {/*  width="100%"*/}
          {/*  height="300px"*/}
          {/*/>*/}
        </Grid>

        <Grid size={{ xs: 12, lg: 6 }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: '100%'
            }}>
            <Typography
              variant="h6"
              fontWeight={600}
              textAlign="center"
              sx={{
                mb: '1rem'
              }}>
              2022 QH Sports Dota 2 Series 3
            </Typography>

            <Grid
              container
              sx={{
                width: '100%'
              }}>
              <Team size={4}>
                <img src="https://placehold.co/80" alt="Team A" />
                <Typography variant="h6" fontWeight={600}>
                  Team A
                </Typography>
                <Button color="primary" variant="outlined">
                  Vote
                </Button>
              </Team>
              <Score size={4}>
                <Typography
                  variant="h3"
                  fontWeight={600}
                  sx={{
                    mb: '0.25rem',
                    fontFamily: "'Iperion W00', sans-serif"
                  }}>
                  2 : 1
                </Typography>
                <LiveChip />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    mt: '1rem',
                    gap: '0.25rem'
                  }}>
                  <Typography
                    variant="body2"
                    color={theme.palette.text.secondary}
                    fontWeight={600}>
                    1 | Map 1 | 0
                  </Typography>
                  <Typography
                    variant="body2"
                    color={theme.palette.text.secondary}
                    fontWeight={600}>
                    1 | Map 2 | 1
                  </Typography>
                  <Typography variant="body2" fontWeight={600}>
                    2 | Map 3 | 1
                  </Typography>
                </Box>
              </Score>
              <Team size={4}>
                <img src="https://placehold.co/80" alt="Team B" />
                <Typography variant="h6" fontWeight={600}>
                  Team B
                </Typography>
                <Button color="primary" variant="outlined">
                  Vote
                </Button>
              </Team>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

const LiveMatchHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',
  backgroundColor: theme.palette.midnight.light,
  padding: '1rem'
}));

const Team = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  rowGap: '0.5rem',
  textAlign: 'center'
}));

const Score = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  textAlign: 'center'
}));
