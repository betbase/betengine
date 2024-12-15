import { MatchItem } from '@/components/Matches/MatchItem';
import { Box, CircularProgress } from '@mui/material';
import { MatchesFilter } from '@/components/Matches/MatchesFilter';
import { database } from '@/appwrite';
import { useEffect, useState } from 'react';
import { Models, Query } from 'appwrite';
import { SerieModel } from '@/models/SerieModel';
import { FavouriteModel } from '@/models/FavouriteModel';
import { SerieWithFavourite } from '@/models/SerieWithFavourite';

export const Matches = () => {
  const [matches, setMatches] = useState<SerieWithFavourite[]>([]);
  const [loading, setLoading] = useState(true);

  const getMatches = async () => {
    const userId = localStorage.getItem('userId');
    if (!userId) return;

    const matchesResponse: Models.DocumentList<SerieModel> =
      await database.listDocuments(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        'series',
        [
          Query.greaterThanEqual(
            'startTimeScheduled',
            new Date().toISOString()
          ),
          Query.orderAsc('startTimeScheduled'),
          Query.equal('rosterReady', true)
        ]
      );

    const favouritesResponse: Models.DocumentList<FavouriteModel> =
      await database.listDocuments(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        'favourites',
        [
          Query.equal(
            'serie',
            matchesResponse.documents.map((match) => match.$id)
          ),
          Query.equal('user', userId)
        ]
      );

    const favouritedSeriesIds = favouritesResponse.documents.map(
      (favourite) => favourite.serie.$id
    );

    const matchesResults: SerieWithFavourite[] = matchesResponse.documents.map(
      (v) => {
        return {
          ...v,
          favourited: favouritedSeriesIds.includes(v.$id)
        };
      }
    );

    setMatches(matchesResults);
    setLoading(false);
  };

  useEffect(() => {
    getMatches();
  }, []);

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
