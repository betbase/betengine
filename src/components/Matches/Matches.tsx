import { MatchItem } from '@/components/Matches/MatchItem';
import { Box, CircularProgress } from '@mui/material';
import { MatchesFilter } from '@/components/Matches/MatchesFilter';

import { useEffect, useState } from 'react';
import { SerieWithFavourite } from '@/models/SerieWithFavourite';
import { useQuery } from '@tanstack/react-query';
import { fetchScheduledMatches } from '@/api/queries/FetchScheduledMatches';

export const Matches = () => {
  const [matches, setMatches] = useState<SerieWithFavourite[]>([]);

  const { data: scheduledMatches, isFetching: loading } = useQuery({
    queryKey: ['matches'],
    queryFn: fetchScheduledMatches,
    refetchOnWindowFocus: false
  });

  useEffect(() => {
    setMatches(scheduledMatches || []);
  }, [scheduledMatches]);

  const handleAddedToFavourites = (serieId: string) => {
    setMatches((prevMatches) =>
      prevMatches.map((match) =>
        match.$id === serieId ? { ...match, favourited: true } : match
      )
    );
  };

  const handleRemovedFromFavourites = (serieId: string) => {
    setMatches((prevMatches) =>
      prevMatches.map((match) =>
        match.$id === serieId ? { ...match, favourited: false } : match
      )
    );
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '1.5rem'
      }}>
      <MatchesFilter />
      {loading && (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <CircularProgress size="4rem" />
        </Box>
      )}
      {matches?.map((match) => (
        <MatchItem
          key={match.$id}
          match={match}
          onAddedToFavourites={handleAddedToFavourites}
          onRemovedFromFavourites={handleRemovedFromFavourites}
        />
      ))}
    </Box>
  );
};
