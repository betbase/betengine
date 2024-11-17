import { Navbar } from '@/components/Navbar/Navbar.tsx';
import { Outlet } from 'react-router-dom';
import { BottomBar } from '@/components/Navbar/BottomBar.tsx';
import { Grid2 as Grid } from '@mui/material';

export const PageLayout = () => {
  return (
    <>
      <Navbar />
      <Grid container spacing={2}>
        <Grid
          size={{ sm: 3, md: 2 }}
          sx={{ display: { xs: 'none', md: 'block' } }}>
          Left Widgets
        </Grid>
        <Grid size={{ sm: 9, md: 8 }}>
          <Outlet />
        </Grid>
        <Grid size={{ md: 2 }} sx={{ display: { xs: 'none', md: 'block' } }}>
          Right Widgets
        </Grid>
      </Grid>
      <BottomBar />
    </>
  );
};
