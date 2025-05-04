// Layouts/HomeLayout.jsx
import * as React from 'react';
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import {
  Box, Drawer, List, ListItem, ListItemButton,
  ListItemIcon, ListItemText, Avatar, IconButton,
  AppBar, Toolbar, Typography, Menu, MenuItem 
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import GirlCamera from '../assets/images/GirlCamera.png';

const menuItems = [
  { to: '/user-home', icon: 'bi-house-door', label: 'Home' },
  { to: '/user-home/newsfeed', icon: 'bi-newspaper', label: 'Newsfeed' },
  { to: '/user-home/explore', icon: 'bi-search', label: 'Explore' },
  { to: '/user-home/notifications', icon: 'bi-bell', label: 'Notifications' },
  { to: '/user-home/messages', icon: 'bi-chat-quote', label: 'Messages' },
  { to: '/user-home/network', icon: 'bi-people', label: 'Network' },
  { to: '/user-home/profile', icon: 'bi-person-circle', label: 'Profile' },
  { to: '/user-home/settings', icon: 'bi-gear', label: 'Settings' },
];

export default function HomeLayout() { // Changed from DrawerLayout to HomeLayout
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const openMenu = Boolean(anchorEl);

  const toggleDrawer = (openState) => (event) => {
    if (event?.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setDrawerOpen(openState);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    setAnchorEl(null);
    console.log("User logged out");
  };

  const drawerContent = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        px: 3,
        pt: 0,
        ml: 3,
      }}
      role="presentation"
      onClick={!isLargeScreen ? toggleDrawer(false) : undefined}
      onKeyDown={!isLargeScreen ? toggleDrawer(false) : undefined}
    >
      <List sx={{ width: '100%' }}>
        {menuItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton component={Link} to={item.to}>
              <ListItemIcon>
                <i className={`bi ${item.icon}`} style={{ fontSize: '1.5rem' }}></i>
              </ListItemIcon>
              <ListItemText primary={item.label} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ display: 'flex', alignItems: 'center', px: 2 }}>
        <button className="btn btn-dark w-100 rounded-5 mt-4"><b>Post</b></button>
      </Box>

      <Box sx={{ mt: 'auto', mb: 3 }}>
        <hr className='mb-4' />
        <Box sx={{ display: 'flex', alignItems: 'end', gap: 2, mb: 3, mt: 2 }}>
          <Avatar
            alt="Profile Picture"
            src={GirlCamera}
            sx={{
              width: 46,
              height: 46,
              border: '3px solid rgb(253, 253, 253)',
              boxShadow: 3,
            }}
          />
          <Box>
            <Typography variant="subtitle1" sx={{ fontSize: '.9rem' }}>
              User Name
            </Typography>
            <Typography variant="body2" color="text.secondary">
              @username
            </Typography>
          </Box>
          <IconButton onClick={handleMenuClick} size="large">
            <MoreHorizIcon />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={openMenu}
            onClose={handleMenuClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
          >
            <MenuItem onClick={handleLogout} sx={{ fontSize: '.9rem' }}>Logout</MenuItem>
          </Menu>
        </Box>
      </Box>
    </Box>
  );

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <AppBar position="fixed" color="default" sx={{ bgcolor: 'background.paper', boxShadow: 1 }}>
        <Toolbar>
          {!isLargeScreen && (
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ mr: 2 }}
            >
              <Avatar alt="Profile Picture" src={GirlCamera} sx={{ width: 40, height: 40 }} />
            </IconButton>
          )}
          <Typography variant="h6" noWrap component="div">
            www.brand.com
          </Typography>
        </Toolbar>
      </AppBar>

      <Drawer
        variant={isLargeScreen ? 'permanent' : 'temporary'}
        open={isLargeScreen ? true : drawerOpen}
        onClose={toggleDrawer(false)}
        anchor="left"
        sx={{
          '& .MuiDrawer-paper': {
            width: 300,
            boxSizing: 'border-box',
            overflowY: 'auto',
            pt: '64px',
            scrollbarWidth: 'none',
            '&::-webkit-scrollbar': { display: 'none' },
          },
        }}
      >
        {drawerContent}
      </Drawer>

      <Box component="main" sx={{ flexGrow: 1, p: 3, pt: 10 }}>
        <Outlet />
      </Box>
    </Box>
  );
}