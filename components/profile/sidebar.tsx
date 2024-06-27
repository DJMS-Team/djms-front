// components/Sidebar.js
import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { User, ShoppingBag, ShoppingCart, BookText } from 'lucide-react';
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import styles from "../../components/navbar.module.css";

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
        [`& .MuiDrawer-paper`]: {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: 'transparent',
          color: '#1c1c3c',
          marginTop: '80px',
          borderRight: '2px solid #e0e0e0', // Aumenta el grosor de la línea
        },
      }}
      className='mt-5 hidden md:block'
    >
      <List className='cursor-pointer ml-3'>
        <ListItem sx={{ mt: 1 }}></ListItem>
        <ListItem sx={{ mb: 3 }} onClick={() => router.push("/account/" + id)} className={`${styles.sidebarItem}`}>
          <ListItemIcon>
            <User className={`${styles.textSidebar} size-6`} />
          </ListItemIcon>
          <p className={`${styles.textSidebar}`}>Perfil</p>
        </ListItem>
        <ListItem sx={{ mb: 4 }} onClick={() => router.push("/account/" + id + "/record")} className={`${styles.sidebarItem}`}>
          <ListItemIcon>
            <ShoppingCart className={`${styles.textSidebar} size-6`} />
          </ListItemIcon>
          <p className={`${styles.textSidebar}`}>Historial de compras</p>
        </ListItem>
        <ListItem sx={{ mb: 4 }} onClick={() => router.push("/account/" + id + "/products")} className={`${styles.sidebarItem}`}>
          <ListItemIcon>
            <ShoppingBag className={`${styles.textSidebar} size-6`} />
          </ListItemIcon>
          <p className={`${styles.textSidebar}`}>Mis productos</p>
        </ListItem>
        <ListItem onClick={() => router.push("/account/" + id + "/orders")} className={`${styles.sidebarItem}`}>
          <ListItemIcon>
            <BookText className='size-6 text-sidebar' />
          </ListItemIcon>
          <p className={`${styles.textSidebar}`}>Mis ordenes</p>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
