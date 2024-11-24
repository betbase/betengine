import {
  Box,
  Grid2 as Grid,
  IconButton,
  styled,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import { Add, Close, Remove } from '@mui/icons-material';

export const VoteslipItem = () => {
  const theme = useTheme();

  return (
    <VoteslipPredictionItemContainer>
      <VoteslipPredictionItemHeader>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            textAlign: 'center'
          }}>
          Match Winner
        </Typography>
        <IconButton
          sx={{
            color: theme.palette.white.main
          }}>
          <Close />
        </IconButton>
      </VoteslipPredictionItemHeader>

      <VoteslipPredictionItemContents>
        <VoteslipPredictionItemTeamContainer>
          <VoteslipPredictionItemTeamHeader variant="h6">
            Fnatic Rising
          </VoteslipPredictionItemTeamHeader>
        </VoteslipPredictionItemTeamContainer>

        <VoteslipPredictionItemTeamsGrid container spacing={2}>
          <Grid size={5}>
            <img src="https://placehold.co/40" alt="Team A" />
            <Typography variant="h6" fontWeight={600}>
              Fnatic Rising
            </Typography>
          </Grid>

          <Grid size={2}>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{
                fontFamily: "'Iperion W00', sans-serif"
              }}>
              vs
            </Typography>
          </Grid>

          <Grid size={5}>
            <img src="https://placehold.co/40" alt="Team A" />
            <Typography variant="h6" fontWeight={600}>
              Faze
            </Typography>
          </Grid>
        </VoteslipPredictionItemTeamsGrid>
        <VoteslipPredictionitemStakeContainer
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
            borderTop: '1px dashed white',
            paddingTop: '1rem'
          }}>
          <VoteslipPredictionItemStakeButton
            sx={{
              borderLeft: '1px solid white'
            }}>
            <Remove
              sx={{
                color: theme.palette.white.main
              }}
            />
          </VoteslipPredictionItemStakeButton>
          <TextField
            type="number"
            label="Stake"
            variant="outlined"
            size="small"
            sx={{
              maxWidth: '6rem'
            }}
          />
          <VoteslipPredictionItemStakeButton
            sx={{
              borderRight: '1px solid white'
            }}>
            <Add
              sx={{
                color: theme.palette.white.main
              }}
            />
          </VoteslipPredictionItemStakeButton>
        </VoteslipPredictionitemStakeContainer>
      </VoteslipPredictionItemContents>
    </VoteslipPredictionItemContainer>
  );
};

const VoteslipPredictionItemContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: theme.palette.midnight.light
}));

const VoteslipPredictionItemHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  justifyContent: 'space-between',
  padding: '0.25rem',
  borderBottom: `1px solid ${theme.palette.white.main}`
}));

const VoteslipPredictionItemContents = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  gap: '1rem'
}));

const VoteslipPredictionItemTeamContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

const VoteslipPredictionItemTeamHeader = styled(Typography)(({ theme }) => ({
  width: '100%',
  border: `1px solid ${theme.palette.primary.main}`,
  padding: '0.75rem',
  textAlign: 'center'
}));

const VoteslipPredictionItemTeamsGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  textAlign: 'center'
}));

const VoteslipPredictionitemStakeContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'flex-end',
  borderTop: '1px dashed white',
  paddingTop: '1rem'
}));

const VoteslipPredictionItemStakeButton = styled(IconButton)(({ theme }) => ({
  borderTop: '1px solid white',
  borderRadius: 0,
  borderBottom: '1px solid white',
  padding: '0.35rem',
  '&:hover': {
    backgroundColor: theme.palette.primary.main
  }
}));
