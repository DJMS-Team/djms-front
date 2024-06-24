// components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { Person, ShoppingBag, ShoppingCart } from '@mui/icons-material';
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

const Sidebar = () => {

  const router = useRouter();
  let id = null;
  const currentUser = Cookies.get("currentUser");

  if (currentUser) {
    try {
      const parsedUser = JSON.parse(currentUser);
      id = parsedUser.id;
    } catch (error) {
      console.error("Error parsing JSON:", error);
    }
  }

  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        width: 240,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: 240, boxSizing: 'border-box', backgroundColor: '#1c1c3c', color: 'white', marginTop: '80px'},
      }}
      className='mt-20 hidden md:block'
    >
      <List>
        <ListItem onClick={() => router.push("/account/" + id)}>
          <ListItemIcon >
            <Person sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Perfil" />
        </ListItem>
        <ListItem onClick={() => router.push("/account/" + id + "/record")}>
          <ListItemIcon>
            <ShoppingCart sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Historia de Compras" />
        </ListItem>
        <ListItem onClick={() => router.push("/account/" + id + "/products")}>
          <ListItemIcon>
            <ShoppingBag sx={{ color: 'white' }} />
          </ListItemIcon>
          <ListItemText primary="Mis productos" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
