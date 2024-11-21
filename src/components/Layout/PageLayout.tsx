import { Navbar } from '@/components/Navbar/Navbar.tsx';
import { Outlet } from 'react-router-dom';
import { BottomBar } from '@/components/Navbar/BottomBar.tsx';
import { Grid2 as Grid } from '@mui/material';
import { Voteslip } from '@/components/Voteslip/Voteslip.tsx';
import { useAuth } from '@/utils/AuthContext.tsx';

export const PageLayout = () => {
  const { loadingUser } = useAuth();

  if (loadingUser) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <Grid container spacing={2}>
        <Grid
          size={{ lg: 2 }}
          sx={{
            display: { xs: 'none', md: 'none', lg: 'block' },
            margin: '1rem 0'
          }}
          px={2}>
          Left Widgets
        </Grid>
        <Grid
          size={{ sm: 12, lg: 7 }}
          sx={{
            margin: '1rem 0'
          }}>
          <Outlet />
        </Grid>
        <Grid
          size={{ lg: 3 }}
          sx={{
            display: { xs: 'none', md: 'none', lg: 'block' },
            margin: '1rem 0'
          }}
          px={2}>
          <Voteslip />
        </Grid>
      </Grid>
      <BottomBar />
    </>
  );
};
