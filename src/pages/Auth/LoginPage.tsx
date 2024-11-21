import { Login } from '@/components/Auth/Login.tsx';
import { Box } from '@mui/material';

export const LoginPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center'
      }}>
      <Login />
    </Box>
  );
};
