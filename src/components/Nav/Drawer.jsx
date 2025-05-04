//./Layouts/DrawerLayout.jsx
import * as React from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Drawer, List, ListItem, ListItemButton,
  ListItemIcon, ListItemText, Avatar, IconButton,
  AppBar, Toolbar, Typography, Menu, MenuItem 
} from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import GirlCamera from '../../assets/images/GirlCamera.png';
/**DO THESE ROUTES NEED TO BE NESTED? */
const menuItems = [
  { to: '/', icon: 'bi-house-door', label: 'Home' },
  { to: '/newsfeed', icon: 'bi-newspaper', label: 'Newsfeed' },
  { to: '/explore', icon: 'bi-search', label: 'Explore' },
  { to: '/notifications', icon: 'bi-bell', label: 'Notifications' },
  { to: '/messages', icon: 'bi-chat-quote', label: 'Messages' },
  { to: '/network', icon: 'bi-people', label: 'Network' },
  { to: '/profile', icon: 'bi-person-circle', label: 'Profile' },
  { to: '/settings', icon: 'bi-gear', label: 'Settings' },
];

export default function HomeLayout() {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg'));
  const [open, setOpen] = React.useState(false);

  {/**MOBILE DRAWER OPEN STATE */}
  const toggleDrawer = (openState) => (event) => {
    if (event?.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return;
    setOpen(openState);
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
const openMenu = Boolean(anchorEl);

const handleMenuClick = (event) => {
  setAnchorEl(event.currentTarget);
};

const handleMenuClose = () => {
  setAnchorEl(null);
};

const handleLogout = () => {
  // Add your logout logic here
  setAnchorEl(null);
  console.log("User logged out");
};


      {/**DRAWER CONTENT LAYOUT */}
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
          <button className="btn btn-dark w-100 rounded-5 mt-4"><b>Post</b>  </button>
        </Box>
       
        <Box sx={{ mt: 'auto', mb: 3 }}>
        <hr className=' mb-4'/>
  <Box sx={{ display: 'flex', alignItems: 'end', gap: 2, mb: 3, mt:2 }}>
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
      <Typography variant="subtitle1" sx={{ my: 0, py: 0, fontSize:'.9rem' }}>
        User Name
      </Typography>
      <Typography variant="body2" color="text.secondary"
       sx={{ my: 0, py: 0 }}>
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
      <MenuItem onClick={handleLogout} sx={{fontSize:'.9rem'}}>Logout</MenuItem>
    </Menu>
  </Box>
</Box>

    </Box>
  );



    {/**TOP NAV */}
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





{/**DRAWER CONTENT */}
      <Drawer
        variant={isLargeScreen ? 'permanent' : 'temporary'}
        open={isLargeScreen ? true : open}
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
      <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
  {drawerContent}

  {/* Nested route components will appear here */}
  <Box sx={{ flexGrow: 1, overflow: 'auto', mt: 2 }}>
    <Outlet />
  </Box>
</Box>

      </Drawer>
    </Box>
  );
}
