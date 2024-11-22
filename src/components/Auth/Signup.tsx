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
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { authRoutes } from '@/routes';

interface SignUpFormInput {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const validationSchema = yup.object({
  username: yup.string().min(3).max(20).required('Username is required'),
  email: yup.string().email().required('Email is required'),
  password: yup.string().required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Passwords must match')
    .required('Confirm Password is required')
});

export const Signup = () => {
  const theme = useTheme();
  const { processing, error, signUpWithEmail, loginWithOAuth } = useAuth();

  const [searchParams] = useSearchParams();

  // Create a function that parses the error
  const oauthError = searchParams.get('error');

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignUpFormInput>({
    resolver: yupResolver(validationSchema)
  });

  const onSubmit: SubmitHandler<SignUpFormInput> = (data) => {
    // validate password and update form state if invalid
    signUpWithEmail(data.username, data.email, data.password);
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
          <strong>Sign Up</strong>
        </Typography>
        <Typography variant="body1" textAlign="center" sx={{ fontWeight: 600 }}>
          Welcome to BetEngine. <br /> Sign up to place predictions and win
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
          label="Username"
          {...register('username')}
          variant="outlined"
          margin="normal"
          helperText={errors.username?.message}
          fullWidth
          sx={{ margin: 0 }}
        />
        <TextField
          label="Email"
          {...register('email')}
          type="email"
          variant="outlined"
          margin="normal"
          helperText={errors.email?.message}
          fullWidth
          sx={{ margin: 0 }}
        />
        <TextField
          {...register('password')}
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          helperText={errors.password?.message}
          fullWidth
          sx={{ margin: 0 }}
        />
        <TextField
          {...register('confirmPassword')}
          label="Confirm Password"
          type="password"
          variant="outlined"
          margin="normal"
          helperText={errors.confirmPassword?.message}
          fullWidth
          sx={{ margin: 0 }}
        />
        <LoadingButton
          type="submit"
          color="primary"
          variant="contained"
          loading={processing}
          fullWidth>
          Sign Up
        </LoadingButton>
        <Typography
          variant="body1"
          sx={{
            fontWeight: 600,
            margin: 0
          }}>
          Already have an account?{' '}
          <Link to={authRoutes.login.path}>Log in</Link>
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
          Sign up with Discord
        </Button>

        <Button
          color="primary"
          variant="outlined"
          fullWidth
          onClick={() => loginWithOAuth(OAuthProvider.Twitch)}
          sx={{
            justifyContent: 'center'
          }}>
          Sign up with Twitch
        </Button>

        <Button
          color="primary"
          variant="outlined"
          fullWidth
          sx={{
            justifyContent: 'center'
          }}>
          <Facebook sx={{ marginRight: '0.25rem' }} /> Sign up with Facebook
        </Button>

        <Button
          color="primary"
          variant="outlined"
          fullWidth
          sx={{
            justifyContent: 'center'
          }}>
          <Google sx={{ marginRight: '0.25rem' }} /> Sign up with Google
        </Button>
      </Box>
    </Box>
  );
};
