// components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Home, Person, Settings,  ShoppingCart } from '@mui/icons-material';

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', backgroundColor: 'black', color: 'white', marginTop: '64px' },
      }}
    >
      <List>
        <ListItem button>
          <ListItemIcon>
            <Person sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Perfil" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCart sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Historia de Compras" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <ShoppingCart sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Mis productos" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
