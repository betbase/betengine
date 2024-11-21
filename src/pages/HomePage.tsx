import { LiveMatch } from '@/components/LiveMatch/LiveMatch.tsx';
import { Matches } from '@/components/Matches/Matches.tsx';
import { useAuth } from '@/utils/AuthContext.tsx';

export const HomePage = () => {
  const { user, loadingUser, loginWithEmail, logout } = useAuth();

  return (
    <>
      <LiveMatch />
      <Matches />
    </>
  );
};
