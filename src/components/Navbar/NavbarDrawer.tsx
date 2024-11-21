import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText
} from '@mui/material';
import { navItems } from '@/routes';

interface NavbarDrawerProps {
  drawerOpen: boolean;
  handleCloseNavMenu: () => void;
}

export const NavbarDrawer = ({
  drawerOpen,
  handleCloseNavMenu
}: NavbarDrawerProps) => {
  return (
    <Drawer anchor="left" open={drawerOpen} onClose={handleCloseNavMenu}>
      <Box sx={{ width: 250 }} role="presentation" onClick={handleCloseNavMenu}>
        <List>
          {navItems.map((page) => (
            <ListItem key={page.id} disablePadding>
              <ListItemButton>
                <ListItemText primary={page.id} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};
