import {
  Alert,
  Box,
  Button,
  Chip,
  Grid2 as Grid,
  IconButton,
  styled,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import { LiveChip } from '@/components/ui/LiveChip';
import {
  Close,
  ConfirmationNumber,
  DiamondSharp,
  HelpOutline
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { authRoutes, routes } from '@/routes';
import { VoteslipItem } from '@/components/Voteslip/VoteslipItem';
import { useVoteslip } from '@/utils/VoteslipContext';
import { useAuth } from '@/utils/AuthContext';
import { useState } from 'react';

export const Voteslip = () => {
  const theme = useTheme();
  const { user } = useAuth();
  const { predictions, totalStake } = useVoteslip();

  return (
    <VoteslipContainer>
      <VoteslipHeader>
        <VoteslipHeadingContainer>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
            <ConfirmationNumber />
            <Typography variant="h6" fontWeight={600}>
              Voteslip
            </Typography>
            <VoteslipHeading variant="body1">{predictions.length}</VoteslipHeading>
          </Box>
        </VoteslipHeadingContainer>

        <Tooltip title="Help" arrow>
          <IconButton
            sx={{
              color: theme.palette.primary.main
            }}>
            <HelpOutline />
          </IconButton>
        </Tooltip>
      </VoteslipHeader>

      <VoteslipPredictionsContainer>
        {predictions.length === 0 && (
          <VoteslipNoPredictionsContainer>
            <Typography variant="h6">No predictions added</Typography>
            {!user?.$id && (
              <Typography variant="body1">
                To place a prediction,{' '}
                <Link to={authRoutes.signup.path}>sign up</Link> or{' '}
                <Link to={authRoutes.login.path}>log in</Link>, and click on any
                prediction.
              </Typography>
            )}
            {user?.$id && (
              <Typography variant="body1">
                Go to <strong><Link to={routes.home.path}>Matches</Link></strong> and click{' '}
                <strong>Vote</strong> to add prediction.
              </Typography>
            )}
          </VoteslipNoPredictionsContainer>
        )}

        {predictions.map((prediction, index) => (
          <VoteslipItem
            key={index}
            prediction={prediction}
          />
        ))}

        {predictions.length > 0 && <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            borderTop: `1px dashed ${theme.palette.primary.main}`,
            paddingTop: '1rem'
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{
                color: theme.palette.white.main,
                fontSize: '1rem'
              }}>
              Total Stake
            </Typography>
            <Typography
              variant="h6"
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: theme.palette.white.main,
                fontSize: '1rem'
              }}>
              <DiamondSharp />
              {totalStake}
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
            <Typography
              variant="h6"
              fontWeight={600}
              sx={{
                color: theme.palette.success.light,
                fontSize: '1rem'
              }}>
              Potential Win
            </Typography>
            <Typography
              variant="h6"
              sx={{
                display: 'flex',
                alignItems: 'center',
                color: theme.palette.success.light,
                fontSize: '1rem'
              }}>
              <DiamondSharp />
              100
            </Typography>
          </Box>

          <Button
            color="primary"
            variant="contained"
            sx={{
              fontWeight: 700,
              fontSize: '1rem'
            }}>
            PLACE BETS
          </Button>
        </Box>}
      </VoteslipPredictionsContainer>
    </VoteslipContainer>
  );
};

const VoteslipContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.midnight.dark
}));

const VoteslipHeader = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1rem',
  backgroundColor: theme.palette.midnight.light,
  padding: '1rem'
}));

const VoteslipHeadingContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'space-between',
  gap: '0.5rem'
}));

const VoteslipHeading = styled(Typography)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.midnight.dark,
  borderRadius: '100%',
  width: '2rem',
  height: '2rem',
  fontWeight: 800
}));

const VoteslipPredictionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '1rem',
  gap: '1rem'
}));

const VoteslipNoPredictionsContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '0.5rem',
  alignItems: 'center',
  textAlign: 'center'
}));
