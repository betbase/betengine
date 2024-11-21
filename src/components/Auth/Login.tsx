import {
  Alert,
  Box,
  Button,
  Divider,
  IconButton,
  Paper,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import { Facebook, Google, X } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useAuth } from '@/utils/AuthContext.tsx';
import { LoadingButton } from '@mui/lab';
import { FormEvent, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

interface LoginFormInputs {
  email: string;
  password: string;
}

export const Login = () => {
  const theme = useTheme();
  const { processing, error, loginWithEmail } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormInputs>();

  const onSubmit: SubmitHandler<LoginFormInputs> = (data) => {
    loginWithEmail(data.email, data.password);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '22rem',
        backgroundColor: theme.palette.midnight.light,
        padding: '1rem',
        gap: '1rem'
      }}>
      <Box>
        <Typography variant="h5" textAlign="center" mb="0.5rem">
          <strong>Log in</strong>
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ fontWeight: 600 }}>
          Welcome to BetEngine. <br /> Log in to place predictions and win
          rewards!
        </Typography>
      </Box>

      <Box
        component="form"
        onSubmit={handleSubmit(onSubmit)}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          width: '100%',
          gap: '1rem'
        }}>
        <TextField
          label="Email"
          {...register('email', { required: 'Email is required' })}
          type="email"
          variant="outlined"
          margin="normal"
          helperText={errors.email?.message}
          fullWidth
          required
          sx={{ margin: 0 }}
        />
        <TextField
          {...register('password', { required: 'Password is required' })}
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          helperText={errors.password?.message}
          fullWidth
          required
          sx={{ margin: 0 }}
        />
        <LoadingButton
          type="submit"
          color="primary"
          variant="contained"
          loading={processing}
          fullWidth>
          Log in
        </LoadingButton>
      </Box>

      {error && <Alert severity="error">{error}</Alert>}
      <Divider
        sx={{
          width: '100%',
          '&::before, &::after': {
            borderColor: theme.palette.white.main
          }
        }}>
        <strong>or</strong>
      </Divider>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          rowGap: '0.5rem',
          width: '100%'
        }}>
        <Button
          color="primary"
          variant="outlined"
          fullWidth
          sx={{
            justifyContent: 'center'
          }}>
          <Facebook sx={{ marginRight: '0.25rem' }} /> Log in with Facebook
        </Button>

        <Button
          color="primary"
          variant="outlined"
          fullWidth
          sx={{
            justifyContent: 'center'
          }}>
          <X sx={{ marginRight: '0.25rem' }} /> Log in with X
        </Button>

        <Button
          color="primary"
          variant="outlined"
          fullWidth
          sx={{
            justifyContent: 'center'
          }}>
          <Google sx={{ marginRight: '0.25rem' }} /> Log in with Google
        </Button>

        <Typography
          variant="body1"
          textAlign="center"
          sx={{ fontWeight: 600, marginTop: '0.5rem' }}>
          Don't have an account? <Link to="/auth/signup">Sign up</Link>
        </Typography>
      </Box>
    </Box>
  );
};
