import {
  Alert,
  Box,
  Chip,
  IconButton,
  styled,
  Tooltip,
  Typography,
  useTheme
} from '@mui/material';
import { LiveChip } from '@/components/ui/LiveChip.tsx';
import {
  ConfirmationNumber,
  DiamondSharp,
  HelpOutline
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

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
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
            alignItems: 'center',
            textAlign: 'center'
          }}>
          <Typography variant="h6">No predictions added</Typography>
          <Typography variant="body1">
            To place a prediction, <Link to="/auth/signup">sign up</Link> or{' '}
            <Link to="/auth/login">log in</Link>, and click on any prediction.
          </Typography>
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
  padding: '1rem'
}));
