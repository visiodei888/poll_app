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
import Profile from './Profile.jsx';
import { Link, NavLink } from 'react-router-dom';


const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar_user = () => {
  const [showProfile, setShowProfile] = React.useState(false);

  const handleProfileClick = () => {
    setShowProfile(!showProfile);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar position="fixed">
      <Toolbar>
        <Tooltip title='Back to Home'>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="home"
          sx={{ mr: 2 }}
        >
          <NavLink to='/Cards' style={{ color: 'inherit', textDecoration: 'none' }}>
          <Home />
          </NavLink>
          
        </IconButton>
        </Tooltip>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          POLL APP
        </Typography>
        <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open profile">
              <IconButton sx={{ p: 0 }} onClick={handleProfileClick}>
              <NavLink to='/Profile' style={{ color: 'inherit', textDecoration: 'none' }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </NavLink>
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