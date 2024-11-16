import { Outlet } from 'react-router-dom';
import { Navbar } from '@/components/Navbar/Navbar.tsx';

export const AuthLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
