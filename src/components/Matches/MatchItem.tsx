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
import { storage } from '@/appwrite';
import { ScheduledChip } from '@/components/ui/ScheduledChip';
import { Link } from 'react-router-dom';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import StarIcon from '@mui/icons-material/Star';
import { DiamondSharp } from '@mui/icons-material';
import { MatchPrediction, useVoteslip } from '@/utils/VoteslipContext';
import { TeamModel } from '@/models/TeamModel';
import { PredictionTypeEnum } from '@/models/PredictionTypeEnum';
import { addToFavourites } from '@/utils/AddToFavourites';
import { SerieWithFavourite } from '@/models/SerieWithFavourite';
import { removeFromFavourites } from '@/utils/RemoveFromFavourites';
import { useAuth } from '@/utils/AuthContext';

interface Props {
  match: SerieWithFavourite;
  onAddedToFavourites: (serieId: string) => void;
  onRemovedFromFavourites: (serieId: string) => void;
}

export const MatchItem = ({
  match,
  onAddedToFavourites,
  onRemovedFromFavourites
}: Props) => {
  const theme = useTheme();
  const { user } = useAuth();
  const { addPrediction } = useVoteslip();

  const handleAddPrediction = (proposedWinner: TeamModel) => {
    const prediction: MatchPrediction = {
      serie: match,
      predictionType: PredictionTypeEnum.MATCH_WINNER,
      proposedWinner: proposedWinner,
      stake: 10
    };

    addPrediction(prediction);
  };

  return (
    <MatchItemWrapper>
      <MatchItemTournamentGrid size={12}>
        <Box display={TournamentGridMediaQueries}>
          <ScheduledChip />
        </Box>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
          <Link
            to={`/tournaments/${match.tournament.$id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}>
            <Typography
              variant="body1"
              fontWeight={700}
              sx={{
                '&:hover': {
                  color: theme.palette.primary.main
                }
              }}>
              {match.tournament.nameShortened}
            </Typography>
          </Link>
          <Typography variant="body2" display={TournamentGridMediaQueries}>
            {new Date(match.startTimeScheduled).toLocaleString()}
          </Typography>
        </Box>

        <Box display={TournamentGridMediaQueries}>
          <Tooltip title="Add to favourites" arrow>
            <IconButton
              onClick={
                match.favourited
                  ? () => removeFromFavourites(match, onRemovedFromFavourites)
                  : () => addToFavourites(match, onAddedToFavourites)
              }
              sx={{
                color: theme.palette.yellow.main
              }}>
              {match.favourited ? <StarIcon /> : <StarOutlineIcon />}
            </IconButton>
          </Tooltip>
        </Box>
      </MatchItemTournamentGrid>
      <MatchItemContainer container columnSpacing="1rem">
        <MatchItemDateGrid
          size={{ xs: 2 }}
          display={{ xs: 'none', md: 'flex', lg: 'none', xl: 'flex' }}>
          <img
            src={storage.getFileView(
              import.meta.env.VITE_APPWRITE_ASSETS_STORAGE_ID,
              'cs2-logo'
            )}
            alt="CS2 Logo"
            height="46"
          />
          <MatchItemDateBox>
            <Typography variant="body2">Jan 11, 04:05 AM</Typography>
            {/*<LiveChip />*/}
            <Link to="/matches/1">
              <ScheduledChip />
            </Link>
          </MatchItemDateBox>
        </MatchItemDateGrid>

        <MatchItemTeamsGrid size={{ xs: 12, sm: 8, md: 8, lg: 8, xl: 8 }}>
          <MatchItemTeamGrid size={5}>
            <MatchItemTeamBox>
              <Link
                to={`/teams/${match?.homeTeam?.$id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{
                    '&:hover': {
                      color: theme.palette.primary.main
                    }
                  }}>
                  {match?.homeTeam?.name}
                </Typography>
              </Link>
              <Button
                color="primary"
                variant="outlined"
                onClick={() => handleAddPrediction(match.homeTeam)}>
                Vote{' '}
                <DiamondSharp
                  sx={{
                    width: '1.125rem',
                    height: '1rem'
                  }}
                />
              </Button>
            </MatchItemTeamBox>
            <Link
              to={`/teams/${match?.homeTeam?.$id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}>
              <img
                src={match?.homeTeam?.logoUrl}
                alt="Team A"
                width="40px"
                height="40px"
              />
            </Link>
          </MatchItemTeamGrid>
          <MatchItemScoreGrid size={2}>
            <Typography
              variant="h5"
              fontWeight={600}
              sx={{
                fontFamily: "'Iperion W00', sans-serif"
              }}>
              vs
            </Typography>
          </MatchItemScoreGrid>
          <MatchItemTeamGrid size={5}>
            <Link
              to={`/teams/${match?.awayTeam?.$id}`}
              style={{ textDecoration: 'none', color: 'inherit' }}>
              <img
                src={match?.awayTeam?.logoUrl}
                alt="Team B"
                width="40x"
                height="40px"
              />
            </Link>
            <MatchItemTeamBox>
              <Link
                to={`/teams/${match?.awayTeam?.$id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}>
                <Typography
                  variant="h6"
                  fontWeight={600}
                  sx={{
                    '&:hover': {
                      color: theme.palette.primary.main
                    }
                  }}>
                  {match?.awayTeam?.name}
                </Typography>
              </Link>
              <Button
                color="primary"
                variant="outlined"
                onClick={() => handleAddPrediction(match.awayTeam)}>
                Vote{' '}
                <DiamondSharp
                  sx={{
                    width: '1.125rem',
                    height: '1rem'
                  }}
                />
              </Button>
            </MatchItemTeamBox>
          </MatchItemTeamGrid>
        </MatchItemTeamsGrid>

        <MatchItemFavouriteGrid
          size={{ xs: 2 }}
          display={{ xs: 'none', md: 'flex', lg: 'none', xl: 'flex' }}>
          {user?.$id && (
            <Tooltip title="Add to favourites" arrow>
              <IconButton
                onClick={
                  match.favourited
                    ? () => removeFromFavourites(match, onRemovedFromFavourites)
                    : () => addToFavourites(match, onAddedToFavourites)
                }
                sx={{
                  color: theme.palette.yellow.main
                }}>
                <StarOutlineIcon />
              </IconButton>
            </Tooltip>
          )}
        </MatchItemFavouriteGrid>
      </MatchItemContainer>
      <MatchItemViewMatchBox>
        <Link to={`/matches/${match.$id}`}>
          <Button
            color="primary"
            variant="contained"
            sx={{
              width: '100%',
              fontWeight: 600
            }}>
            View Match
          </Button>
        </Link>
      </MatchItemViewMatchBox>
    </MatchItemWrapper>
  );
};

const TournamentGridMediaQueries = {
  xs: 'flex',
  sm: 'flex',
  md: 'none',
  lg: 'flex',
  xl: 'none'
};

const MatchItemWrapper = styled(Box)(() => ({}));

const MatchItemContainer = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.midnight.dark,
  padding: '1rem',
  justifyContent: 'center'
}));

const MatchItemTournamentGrid = styled(Grid)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  width: '100%',
  backgroundColor: theme.palette.midnight.light,
  padding: '0.5rem 1rem',
  [theme.breakpoints.between('xs', 'md')]: {
    justifyContent: 'space-between'
  },
  [theme.breakpoints.between('md', 'lg')]: {
    justifyContent: 'center'
  },
  [theme.breakpoints.between('lg', 'xl')]: {
    justifyContent: 'space-between'
  },
  [theme.breakpoints.up('xl')]: {
    justifyContent: 'center'
  }
}));

const MatchItemDateGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  gap: '1rem'
}));

const MatchItemDateBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '0.25rem'
}));

const MatchItemTeamsGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1rem',
  width: '100%'
}));

const MatchItemTeamGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'
}));

const MatchItemTeamBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  gap: '0.25rem'
}));

const MatchItemScoreGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center'
}));

const MatchItemViewMatchBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  width: '100%'
}));

const MatchItemFavouriteGrid = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center'
}));
