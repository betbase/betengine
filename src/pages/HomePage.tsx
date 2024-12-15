import { LiveMatch } from '@/components/LiveMatch/LiveMatch';
import { Matches } from '@/components/Matches/Matches';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { SerieWithFavourite } from '@/models/SerieWithFavourite';
import { useQuery } from '@tanstack/react-query';
import { fetchLiveMatches } from '@/api/queries/FetchLiveMatches';

export const HomePage = () => {
  const [liveMatches, setLiveMatches] = useState<SerieWithFavourite[]>([]);

  const { data } = useQuery({
    queryKey: ['liveMatches'],
    queryFn: fetchLiveMatches,
    refetchOnWindowFocus: false
  });

  useEffect(() => {
    setLiveMatches(data || []);
  }, [data]);

  const handleAddedToFavourites = (serieId: string) => {
    setLiveMatches((prevMatches) =>
      prevMatches.map((match) =>
        match.$id === serieId ? { ...match, favourited: true } : match
      )
    );
  };

  const handleRemovedFromFavourites = (serieId: string) => {
    setLiveMatches((prevMatches) =>
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
        rowGap: '1rem'
      }}>
      {liveMatches.length > 0 && (
        <LiveMatch
          match={liveMatches[0]}
          onAddedToFavourites={handleAddedToFavourites}
          onRemovedFromFavourites={handleRemovedFromFavourites}
        />
      )}
      <Matches />
    </Box>
  );
};
