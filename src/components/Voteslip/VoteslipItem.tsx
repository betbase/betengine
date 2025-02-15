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
import { MatchPrediction, useVoteslip } from '@/utils/VoteslipContext';
import { MIN_PREDICTION_STAKE, PREDICTION_STAKE_STEP } from '@/config';
import { enqueueSnackbar } from 'notistack';

interface Props {
  prediction: MatchPrediction;
}

export const VoteslipItem = ({ prediction }: Props) => {
  const theme = useTheme();
  const { updatePrediction, removePrediction } = useVoteslip();

  const handleReduceStake = () => {
    if ((prediction.stake - PREDICTION_STAKE_STEP) < MIN_PREDICTION_STAKE) {
      enqueueSnackbar(`Minimum stake is ${MIN_PREDICTION_STAKE}`, {
        variant: 'warning'
      })
    }

    if (prediction.stake >= PREDICTION_STAKE_STEP && (prediction.stake - PREDICTION_STAKE_STEP) >= MIN_PREDICTION_STAKE) {
      updatePrediction(
        prediction.serie.$id,
        prediction.proposedWinner.$id,
        prediction.stake - PREDICTION_STAKE_STEP
      );
    }
  };

  const handleIncreaseStake = () => {
    updatePrediction(
      prediction.serie.$id,
      prediction.proposedWinner.$id,
      prediction.stake + PREDICTION_STAKE_STEP
    );
  };

  return (
    <VoteslipPredictionItemContainer>
      <VoteslipPredictionItemHeader>
        <Typography
          variant="h6"
          sx={{
            flexGrow: 1,
            textAlign: 'center',
            fontSize: '1rem'
          }}>
          {prediction.predictionType}
        </Typography>
        <IconButton
          onClick={() => removePrediction(prediction.serie.$id, prediction.proposedWinner.$id)}
          sx={{
            color: theme.palette.white.main
          }}>
          <Close />
        </IconButton>
      </VoteslipPredictionItemHeader>

      <VoteslipPredictionItemContents>
        <VoteslipPredictionItemTeamContainer>
          <VoteslipPredictionItemWinnerHeader variant="h6" fontWeight={600}>
            {prediction.proposedWinner.name}
          </VoteslipPredictionItemWinnerHeader>
        </VoteslipPredictionItemTeamContainer>

        <VoteslipPredictionItemTeamsGrid container spacing={2}>
          <Grid size={5}>
            <Typography variant="h6" fontWeight={600} fontSize="1rem">
              {prediction.serie.homeTeam.name}
            </Typography>
          </Grid>

          <Grid size={2}>
            <Typography
              variant="h6"
              fontWeight={600}
              fontSize="1rem"
              sx={{
                fontFamily: "'Iperion W00', sans-serif"
              }}>
              vs
            </Typography>
          </Grid>

          <Grid size={5}>
            <Typography variant="h6" fontWeight={600} fontSize="1rem">
              {prediction.serie.awayTeam.name}
            </Typography>
          </Grid>
        </VoteslipPredictionItemTeamsGrid>
        <VoteslipPredictionitemStakeContainer>
          <VoteslipPredictionItemStakeButton
            onClick={handleReduceStake}
            sx={{
              borderLeft: `1px solid ${theme.palette.white.main}`
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
            value={prediction.stake}
            sx={{
              maxWidth: '6rem'
            }}
          />
          <VoteslipPredictionItemStakeButton
            onClick={handleIncreaseStake}
            sx={{
              borderRight: `1px solid ${theme.palette.white.main}`
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

const VoteslipPredictionItemWinnerHeader = styled(Typography)(({ theme }) => ({
  width: '100%',
  border: `1px solid ${theme.palette.primary.main}`,
  padding: '0.5rem',
  fontSize: '1rem',
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
  borderTop: `1px dashed ${theme.palette.white.main}`,
  paddingTop: '1rem'
}));

const VoteslipPredictionItemStakeButton = styled(IconButton)(({ theme }) => ({
  borderTop: `1px solid ${theme.palette.white.main}`,
  borderRadius: 0,
  borderBottom: `1px solid ${theme.palette.white.main}`,
  padding: '0.35rem',
  '&:hover': {
    backgroundColor: theme.palette.primary.main
  }
}));
