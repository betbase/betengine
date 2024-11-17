import { ReactNode } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '@/pages/HomePage.tsx';
import { ErrorNotFoundPage } from '@/pages/ErrorNotFoundPage.tsx';
import { PageLayout } from '@/components/Layout/PageLayout.tsx';
import { MatchesPage } from '@/pages/MatchesPage.tsx';
import { AuthLayout } from '@/components/Layout/AuthLayout.tsx';
import {
  Home as HomeIcon,
  Leaderboard as LeaderboardIcon,
  SportsEsports as MatchesIcon,
  Redeem as RewardsIcon,
  EmojiEvents as TournamentsIcon
} from '@mui/icons-material';

interface Route {
  id: string;
  name?: string;
  path: string;
  element: ReactNode;
  icon?: ReactNode;
}

interface Routes {
  [key: string]: Route;
}

export const authRoutes: Routes = {
  login: {
    id: 'Login',
    path: '/auth/login',
    element: <HomePage />
  },
  signup: {
    id: 'Signup',
    path: '/auth/signup',
    element: <HomePage />
  }
};

export const routes: Routes = {
  home: {
    id: 'Home',
    path: '/',
    element: <HomePage />,
    icon: <HomeIcon />
  },
  matches: {
    id: 'Matches',
    path: '/matches',
    element: <MatchesPage />,
    icon: <MatchesIcon />
  },
  match: {
    id: 'Match',
    path: '/matches/:id',
    element: <HomePage />
  },
  tournaments: {
    id: 'Tournaments',
    path: '/tournaments',
    element: <HomePage />,
    icon: <TournamentsIcon />
  },
  tournament: {
    id: 'Tournament',
    path: '/tournaments/:id',
    element: <HomePage />
  },
  leaderboards: {
    id: 'Leaderboards',
    path: '/leaderboards',
    element: <HomePage />,
    icon: <LeaderboardIcon />
  },
  rewards: {
    id: 'Rewards',
    path: '/rewards',
    element: <HomePage />,
    icon: <RewardsIcon />
  },
  profile: {
    id: 'Profile',
    path: '/profile',
    element: <HomePage />
  }
};

export const navItems = Object.values(routes).filter((item) =>
  ['Home', 'Matches', 'Tournaments', 'Leaderboards', 'Rewards'].includes(
    item.id
  )
);

export const router = createBrowserRouter([
  {
    path: '/',
    element: <PageLayout />,
    errorElement: <ErrorNotFoundPage />,
    children: Object.values(routes).map((item) => {
      return {
        ...item,
        errorElement: <ErrorNotFoundPage />
      };
    })
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: Object.values(authRoutes).map((item) => {
      return {
        ...item,
        errorElement: <ErrorNotFoundPage />
      };
    })
  }
]);
