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
          size={{ md: 2 }}
          sx={{ display: { xs: 'none', md: 'block' } }}
          px={2}>
          Left Widgets
        </Grid>
        <Grid size={{ sm: 12, md: 7 }}>
          <Outlet />
        </Grid>
        <Grid
          size={{ md: 3 }}
          sx={{ display: { xs: 'none', md: 'block' } }}
          px={2}>
          Right Widgets
        </Grid>
      </Grid>
      <BottomBar />
    </>
  );
};
