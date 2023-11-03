import React, { useState } from 'react';
import { AppBar, Box, Drawer, IconButton, Toolbar, Typography } from '@mui/material';
import FastfoodTwoToneIcon from '@mui/icons-material/FastfoodTwoTone';
import { Link } from '@mui/material';
import '../../src/Styles/HeaderStyle.css';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const MobileDrawer = () => {
    return (
      <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
        <Typography color={'goldenrod'} variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <FastfoodTwoToneIcon />
          My Restaurant
        </Typography>

        {/* Uncomment this Box element if you want to display it */}
        {/* <Box sx={{ display: { xs: 'none', sm: 'block' } }}> */}
        <ul className="mobile Navigation">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/menu">Menu</Link>
          </li>
        </ul>
    
      </Box>
    );
  };

  return (
    <>
      <Box>
        <AppBar component="nav" sx={{ bgcolor: 'black' }}>
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              sx={{ mr: 2, display: { xs: 'none', sm: 'block' } }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <Typography color={'goldenrod'} variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <FastfoodTwoToneIcon />
              My Restaurant
            </Typography>
            
              <ul className="navigation-menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
              </ul>
            
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{ display: { xs: 'none', sm: 'block' },"&,MuiDrawer-papaer":{
                boxSizing:"border-box",
                width:"240px"
            } }}
          >
            <MobileDrawer />
          </Drawer>
        </Box>
      </Box>
    </>
  );
};

export default Header;
