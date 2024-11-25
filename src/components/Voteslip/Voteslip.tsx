import {
  Alert,
  Box,
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
import { authRoutes } from '@/routes';
import { VoteslipItem } from '@/components/Voteslip/VoteslipItem';

export const Voteslip = () => {
  const theme = useTheme();
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
            <VoteslipHeading variant="body1">1</VoteslipHeading>
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
        {/* No predictions */}
        {/*<VoteslipNoPredictionsContainer>*/}
        {/*  <Typography variant="h6">No predictions added</Typography>*/}
        {/*  <Typography variant="body1">*/}
        {/*    To place a prediction,{' '}*/}
        {/*    <Link to={authRoutes.signup.path}>sign up</Link> or{' '}*/}
        {/*    <Link to={authRoutes.login.path}>log in</Link>, and click on any*/}
        {/*    prediction.*/}
        {/*  </Typography>*/}
        {/*</VoteslipNoPredictionsContainer>*/}

        <VoteslipItem />
        <VoteslipItem />

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem'
          }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
            <Typography variant="h6" fontWeight={600}>
              Total Stake
            </Typography>
            <Typography
              variant="h6"
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}>
              <DiamondSharp />
              100
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
                color: theme.palette.success.light
              }}>
              Potential Win
            </Typography>
            <Typography
              variant="h6"
              sx={{
                display: 'flex',
                alignItems: 'center'
              }}>
              <DiamondSharp />
              100
            </Typography>
          </Box>
        </Box>
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
