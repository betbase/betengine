import {
  Alert,
  Box,
  Button,
  Divider,
  TextField,
  Typography,
  useTheme
} from '@mui/material';
import { Facebook, Google } from '@mui/icons-material';
import { Link, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/utils/AuthContext';
import { LoadingButton } from '@mui/lab';
import { SubmitHandler, useForm } from 'react-hook-form';
import { OAuthProvider } from 'appwrite';
import { authRoutes } from '@/routes';

interface LoginFormInput {
  email: string;
  password: string;
}

export const Login = () => {
  const theme = useTheme();
  const { processing, error, loginWithEmail, loginWithOAuth } = useAuth();

  const [searchParams] = useSearchParams();

  // Create a function that parses the error
  const oauthError = searchParams.get('error');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginFormInput>();

  const onSubmit: SubmitHandler<LoginFormInput> = (data) => {
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
          <strong>Log In</strong>
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
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
            margin: 0
          }}>
          <Link to={authRoutes.forgot.path}>Forgot your password?</Link>
        </Typography>
      </Box>

      {(error || oauthError) && (
        <Alert severity="error" sx={{ maxWidth: '100%' }}>
          {error || oauthError}
        </Alert>
      )}
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
          onClick={() => loginWithOAuth(OAuthProvider.Discord)}
          sx={{
            justifyContent: 'center'
          }}>
          Log in with Discord
        </Button>

        <Button
          color="primary"
          variant="outlined"
          fullWidth
          onClick={() => loginWithOAuth(OAuthProvider.Twitch)}
          sx={{
            justifyContent: 'center'
          }}>
          Log in with Twitch
        </Button>

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
          <Google sx={{ marginRight: '0.25rem' }} /> Log in with Google
        </Button>

        <Typography
          variant="body1"
          textAlign="center"
          sx={{ fontWeight: 600, marginTop: '0.5rem' }}>
          Don't have an account?{' '}
          <Link to={authRoutes.signup.path}>Sign up</Link>
        </Typography>
      </Box>
    </Box>
  );
};
