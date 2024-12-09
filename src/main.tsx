import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@/themes/default/theme';
import './index.css';
import { AuthProvider } from '@/utils/AuthContext';
import { VoteslipProvider } from '@/utils/VoteslipContext';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
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
  </StrictMode>
);
