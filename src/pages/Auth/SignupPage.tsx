import { Box } from '@mui/material';
import { Signup } from '@/components/Auth/Signup';

export const SignupPage = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        width: '100%',
        justifyContent: 'center'
      }}>
      <Signup />
    </Box>
  );
};
