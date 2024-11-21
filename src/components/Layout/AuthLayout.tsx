import { Outlet, useNavigate } from 'react-router-dom';
import { Navbar } from '@/components/Navbar/Navbar.tsx';
import { useAuth } from '@/utils/AuthContext.tsx';
import { Box } from '@mui/material';

export const AuthLayout = () => {
  const navigate = useNavigate();
  const { user, loadingUser } = useAuth();

  if (loadingUser) return <div>Loading...</div>;

  if (user?.$id) navigate('/');

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
