import { MatchItem } from '@/components/Matches/MatchItem';
import { Box } from '@mui/material';
import { MatchesFilter } from '@/components/Matches/MatchesFilter';
import { database } from '@/appwrite';
import { useEffect, useState } from 'react';
import { Query } from 'appwrite';
import { SerieModel } from '@/models/SerieModel';

export const Matches = () => {
  const [matches, setMatches] = useState<SerieModel[]>([]);

  useEffect(() => {
    const getMatches = async () => {
      const response = await database.listDocuments(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        'series',
        [
          Query.greaterThanEqual('startTimeScheduled', new Date().toISOString()),
          Query.orderAsc('startTimeScheduled'),
          Query.equal('rosterReady', true),
        ]
      );

      console.log(response.documents);
      setMatches(response.documents as SerieModel[]);
    };

    getMatches();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '1.5rem'
      }}>
      <MatchesFilter />
      {matches?.map((match) => (
        <MatchItem key={match.$id} match={match} />
      ))}
    </Box>
  );
};
