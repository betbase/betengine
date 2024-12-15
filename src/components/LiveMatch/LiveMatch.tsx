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
import { LiveChip } from '@/components/ui/LiveChip';
import { DiamondSharp } from '@mui/icons-material';
import { StreamProviderEnum } from '@/models/StreamProviderEnum';
import { SerieWithFavourite } from '@/models/SerieWithFavourite';
import { removeFromFavourites } from '@/utils/RemoveFromFavourites';
import { addToFavourites } from '@/utils/AddToFavourites';
import StarIcon from '@mui/icons-material/Star';
import { MatchPrediction, useVoteslip } from '@/utils/VoteslipContext';
import { TeamModel } from '@/models/TeamModel';
import { PredictionTypeEnum } from '@/models/PredictionTypeEnum';
import { client } from '@/appwrite';
import { useEffect, useState } from 'react';
import { SerieMapModel } from '@/models/SerieMapModel';
import { RealtimeResponseEvent } from 'appwrite';
import { SerieModel } from '@/models/SerieModel';

interface Props {
  match: SerieWithFavourite;
  onAddedToFavourites: (serieId: string) => void;
  onRemovedFromFavourites: (serieId: string) => void;
}

export const LiveMatch = ({
  match,
  onAddedToFavourites,
  onRemovedFromFavourites
}: Props) => {
  const theme = useTheme();
  const { addPrediction } = useVoteslip();

  const [homeTeamScore, setHomeTeamScore] = useState<number>(
    match.homeTeamScore
  );
  const [awayTeamScore, setAwayTeamScore] = useState<number>(
    match.awayTeamScore
  );
  const [serieMaps, setSerieMaps] = useState<SerieMapModel[]>(
    match.serieMaps || []
  );

  const handleAddPrediction = (proposedWinner: TeamModel) => {
    const prediction: MatchPrediction = {
      serie: match,
      predictionType: PredictionTypeEnum.MATCH_WINNER,
      proposedWinner: proposedWinner,
      stake: 10
    };

    addPrediction(prediction);
  };

  useEffect(() => {
    const subscribe = client.subscribe(
      `databases.${import.meta.env.VITE_APPWRITE_DATABASE_ID}.collections.series.documents.${match.$id}`,
      (response: RealtimeResponseEvent<SerieModel>) => {
        setHomeTeamScore(response.payload.homeTeamScore);
        setAwayTeamScore(response.payload.awayTeamScore);
        setSerieMaps(response.payload.serieMaps || []);
      }
    );

    return () => {
      subscribe();
    };
  }, []);

  return (
    <Box
      sx={{
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
            {match.tournament.nameShortened}
          </Typography>
        </Box>
        <Box>
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
      </LiveMatchHeader>

      <Grid container spacing={2} padding={2}>
        <Grid size={{ xs: 12, lg: 6 }}>
          {match?.streamProvider === StreamProviderEnum.Twitch &&
            match?.streamChannel && (
              <TwitchPlayer
                channel={match.streamChannel}
                parent={['localhost']}
                width="100%"
                height="300px"
              />
            )}
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
            {/* TODO: Might not be needed */}
            {/*<Typography*/}
            {/*  variant="h6"*/}
            {/*  fontWeight={600}*/}
            {/*  textAlign="center"*/}
            {/*  sx={{*/}
            {/*    mb: '1rem'*/}
            {/*  }}>*/}
            {/*  2022 QH Sports Dota 2 Series 3*/}
            {/*</Typography>*/}

            <Grid
              container
              sx={{
                width: '100%'
              }}>
              <Team size={4}>
                <img src={match.homeTeam?.logoUrl} alt="Team A" height="64px" />
                <Typography variant="h6" fontWeight={600}>
                  {match.homeTeam.name}
                </Typography>
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
              </Team>
              <Score size={4}>
                <Typography
                  variant="h3"
                  fontWeight={600}
                  sx={{
                    mb: '0.25rem',
                    fontFamily: "'Iperion W00', sans-serif"
                  }}>
                  {homeTeamScore} : {awayTeamScore}
                </Typography>
                <LiveChip />
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    mt: '1rem',
                    gap: '0.25rem'
                  }}>
                  {serieMaps
                    ?.sort((a, b) => Number(b.finished) - Number(a.finished))
                    .map((map, index) => (
                      <Typography
                        key={index}
                        variant="body2"
                        color={
                          map.finished
                            ? theme.palette.text.secondary
                            : theme.palette.white.toString()
                        }
                        fontWeight={600}>
                        {map.homeTeamScore} | {map.mapName.toUpperCase()} |{' '}
                        {map.awayTeamScore}
                      </Typography>
                    ))}
                </Box>
              </Score>
              <Team size={4}>
                <img src={match.awayTeam?.logoUrl} alt="Team B" height="64px" />
                <Typography variant="h6" fontWeight={600}>
                  {match.awayTeam.name}
                </Typography>
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
