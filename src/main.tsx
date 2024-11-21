import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from '@/routes.tsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from '@/themes/default/theme.ts';
import './index.css';
import { AuthProvider } from '@/utils/AuthContext.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider
          router={router}
          future={{
            v7_startTransition: true
          }}></RouterProvider>
      </ThemeProvider>
    </AuthProvider>
  </StrictMode>
);
