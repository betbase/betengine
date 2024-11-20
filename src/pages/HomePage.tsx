import { LiveMatch } from '@/components/LiveMatch/LiveMatch.tsx';
import { Matches } from '@/components/Matches/Matches.tsx';

export const HomePage = () => {
  return (
    <>
      <LiveMatch />
      <Matches />
    </>
  );
};
