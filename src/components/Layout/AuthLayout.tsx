import { Outlet, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar/Navbar';
import { useAuth } from '@/utils/AuthContext';
import { Box } from '@mui/material';
import { useEffect } from 'react';

export const AuthLayout = () => {
  const navigate = useNavigate();
  const { user, loadingUser } = useAuth();

  useEffect(() => {
    if (user?.$id) navigate('/');
  }, [user]);

  if (loadingUser) return <div>Loading...</div>;

  return (
    <>
      <Navbar />
      <Box
        sx={{
          margin: '1rem 0'
        }}>
        <Outlet />
      </Box>
    </>
  );
};
