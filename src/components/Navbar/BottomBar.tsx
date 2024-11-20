import { useEffect, useState } from 'react';
import { Menu as MenuIcon } from '@mui/icons-material';
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  useTheme
} from '@mui/material';
import { navItems } from '@/routes.tsx';
import { Link, useLocation } from 'react-router-dom';

export const BottomBar = () => {
  const theme = useTheme();
  const location = useLocation();

  const currentRoute = Object.values(navItems).find(
    (item) => item.path === location.pathname
  );

  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(navItems.findIndex((item) => item.id === currentRoute?.id));
  }, [currentRoute?.id, location.pathname]);

  return (
    <Box
      sx={{
        display: { md: 'flex', lg: 'none' },
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0
      }}>
      <BottomNavigation
        showLabels
        value={value}
        sx={{ width: '100%', backgroundColor: theme.palette.midnight.light }}>
        {navItems.map((page) => (
          <BottomNavigationAction
            key={page.id}
            label={page.id}
            icon={page.icon}
            component={Link}
            to={page.path}
            sx={{
              '&:hover': {
                backgroundColor: 'rgba(128, 186, 214, 0.05)'
              }
            }}
          />
        ))}
        <BottomNavigationAction label="Menu" icon={<MenuIcon />} />
      </BottomNavigation>
    </Box>
  );
};
