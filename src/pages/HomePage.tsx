import { LiveMatch } from '@/components/LiveMatch/LiveMatch';
import { Matches } from '@/components/Matches/Matches';
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { database } from '@/appwrite';
import { Query } from 'appwrite';
import { SerieModel } from '@/models/SerieModel';

export const HomePage = () => {
  const [liveMatches, setLiveMatches] = useState<SerieModel[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getLiveMatches = async () => {
      const response = await database.listDocuments(
        import.meta.env.VITE_APPWRITE_DATABASE_ID,
        'series',
        [
          Query.equal('live', true),
          Query.equal('finished', false)
        ]
      );

      console.log(response.documents);
      setLiveMatches(response.documents as SerieModel[]);
      setLoading(false);
    }
    getLiveMatches();
  }, []);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '1rem'
      }}>
      {liveMatches.length > 0 && <LiveMatch match={liveMatches[0]}  />}
      <Matches />
    </Box>
  );
};
