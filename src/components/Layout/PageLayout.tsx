import { Navbar } from '@/components/Navbar/Navbar.tsx';
import { Outlet } from 'react-router-dom';
import { BottomBar } from '@/components/Navbar/BottomBar.tsx';

export const PageLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <BottomBar />
    </>
  );
};
