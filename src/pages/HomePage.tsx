import { LiveMatch } from '@/components/LiveMatch/LiveMatch';
import { Matches } from '@/components/Matches/Matches';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { database } from '@/appwrite';
import { Models, Query } from 'appwrite';
import { SerieModel } from '@/models/SerieModel';
import { SerieWithFavourite } from '@/models/SerieWithFavourite';
import { FavouriteModel } from '@/models/FavouriteModel';

export const HomePage = () => {
  const [liveMatches, setLiveMatches] = useState<SerieWithFavourite[]>([]);

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

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) return;

    const getLiveMatches = async () => {
      const liveMatchesResponse: Models.DocumentList<SerieModel> =
        await database.listDocuments(
          import.meta.env.VITE_APPWRITE_DATABASE_ID,
          'series',
          [Query.equal('live', true), Query.equal('finished', false)]
        );

      const favouritesResponse = (await database.listDocuments(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        'favourites',
        [
          Query.equal(
            'serie',
            liveMatchesResponse.documents.map((match) => match.$id)
          ),
          Query.equal('user', userId)
        ]
      )) as Models.DocumentList<FavouriteModel>;

      const favouritedSeriesIds = favouritesResponse.documents.map(
        (favourite) => favourite.serie.$id
      );

      const liveMatchesResults: SerieWithFavourite[] =
        liveMatchesResponse.documents.map((v) => {
          return {
            ...v,
            favourited: favouritedSeriesIds.includes(v.$id)
          };
        });

      setLiveMatches(liveMatchesResults);
    };
    getLiveMatches();
  }, []);

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
