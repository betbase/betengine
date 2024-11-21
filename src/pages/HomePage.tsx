import { LiveMatch } from '@/components/LiveMatch/LiveMatch';
import { Matches } from '@/components/Matches/Matches';
import { useAuth } from '@/utils/AuthContext';

export const HomePage = () => {
  const { user, loadingUser, loginWithEmail, logout } = useAuth();

  return (
    <>
      <LiveMatch />
      <Matches />
    </>
  );
};
