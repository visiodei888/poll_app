import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import { Home, VerifiedUserRounded } from '@mui/icons-material';

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar_user = () => {
    
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="static">
      <Toolbar>
        <Tooltip title='Back to Home'>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="home"
          sx={{ mr: 2 }}
        >
          <Home />
        </IconButton>
        </Tooltip>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          POLL APP
        </Typography>
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open profile">
              <IconButton sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
               anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              
            >
              {settings.map((setting) => (
                <MenuItem key={setting} >
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar_user