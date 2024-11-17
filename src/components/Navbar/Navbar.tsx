import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Menu,
  Avatar,
  Button,
  Tooltip,
  MenuItem,
  useTheme
} from '@mui/material';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems } from '@/routes.tsx';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

export const Navbar = () => {
  const theme = useTheme();

  const location = useLocation();
  const currentRoute = Object.values(navItems).find(
    (item) => item.path === location.pathname
  );

  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        height: '80px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)'
      }}>
      <Toolbar
        sx={{ height: '100%', width: '100%', px: { xs: 2, sm: 3, md: 4 } }}>
        <Typography
          variant="h5"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: 'none', sm: 'none', md: 'flex' },
            textDecoration: 'none',
            fontWeight: 600,
            color: 'white'
          }}>
          BetEngine
        </Typography>

        {/* Mobile & Tablet Navbar */}
        <>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              textDecoration: 'none',
              flexGrow: 1,
              fontWeight: 600,
              color: 'white'
            }}>
            BetEngine
          </Typography>
        </>

        <Box
          sx={{ flexGrow: 1, display: { xs: 'none', sm: 'none', md: 'flex' } }}>
          {navItems.map((page) => (
            <Link
              to={page.path}
              style={{ textDecoration: 'none', marginTop: 2, marginBottom: 2 }}
              key={page.id}>
              <Button
                color="primary"
                variant="outlined"
                sx={{
                  fontSize: '1rem',
                  borderColor:
                    currentRoute?.path === page.path
                      ? theme.palette.primary.main
                      : 'transparent',
                  color:
                    currentRoute?.path === page.path
                      ? theme.palette.primary.main
                      : theme.palette.text.secondary,
                  '&:hover': {
                    color: theme.palette.text.primary
                  }
                }}>
                {page.id}
              </Button>
            </Link>
          ))}
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Link to="/auth/login" style={{ textDecoration: 'none' }}>
            <Button
              color="primary"
              variant="outlined"
              sx={{
                display: { xs: 'none', sm: 'flex' },
                whiteSpace: 'nowrap'
              }}>
              Log in
            </Button>
          </Link>

          <Link to="/auth/signup" style={{ textDecoration: 'none' }}>
            <Button
              color="success"
              variant="contained"
              sx={{
                display: { xs: 'none', sm: 'flex' },
                whiteSpace: 'nowrap'
              }}>
              Sign Up
            </Button>
          </Link>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: '45px' }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            keepMounted
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right'
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}>
            {settings.map((setting) => (
              <MenuItem key={setting} onClick={handleCloseUserMenu}>
                <Typography sx={{ textAlign: 'center' }}>{setting}</Typography>
              </MenuItem>
            ))}
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
