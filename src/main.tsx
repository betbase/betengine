import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes';
import { CssBaseline, Grow, ThemeProvider } from '@mui/material';
import { theme } from '@/themes/default/theme';
import './index.css';
import { AuthProvider } from '@/utils/AuthContext';
import { VoteslipProvider } from '@/utils/VoteslipContext';
import { SnackbarProvider } from 'notistack';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <SnackbarProvider
        maxSnack={1}
        style={{
          fontWeight: 600
        }}
        TransitionComponent={Grow}
        autoHideDuration={3000}
        anchorOrigin={{
          horizontal: 'right',
          vertical: 'bottom'
        }}>
        <AuthProvider>
          <VoteslipProvider>
            <ThemeProvider theme={theme}>
              <CssBaseline />
              <RouterProvider
                router={router}
                future={{
                  v7_startTransition: true
                }}
              />
            </ThemeProvider>
          </VoteslipProvider>
        </AuthProvider>
      </SnackbarProvider>
    </QueryClientProvider>
  </StrictMode>
);
