import { LiveMatch } from '@/components/LiveMatch/LiveMatch';
import { Matches } from '@/components/Matches/Matches';
import { Box, Skeleton } from '@mui/material';
import { useEffect, useState } from 'react';
import { SerieWithFavourite } from '@/models/SerieWithFavourite';
import { useQuery } from '@tanstack/react-query';
import { fetchLiveMatches } from '@/api/queries/FetchLiveMatches';
import Carousel from 'react-material-ui-carousel';

export const HomePage = () => {
  const [liveMatches, setLiveMatches] = useState<SerieWithFavourite[]>([]);

  const { data, isFetching } = useQuery({
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
      {isFetching && <Skeleton height="300px" />}
      {liveMatches?.length > 0 && (
        <Carousel autoPlay={false}>
          {liveMatches.map((match) => (
            <LiveMatch
              key={match.$id}
              match={match}
              onAddedToFavourites={handleAddedToFavourites}
              onRemovedFromFavourites={handleRemovedFromFavourites}
            />
          ))}
        </Carousel>
      )}
      <Matches />
    </Box>
  );
};
