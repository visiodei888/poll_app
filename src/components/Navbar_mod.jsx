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
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';


const Navbar_mod = () => {
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
          <NavLink to='/Modcards' style={{ color: 'inherit', textDecoration: 'none' }}>
          <Home />
          </NavLink>
        </IconButton>
        </Tooltip>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          POLL APP
        </Typography>
        <NavLink to='/Create' style={{ color: 'inherit', textDecoration: 'none' }}>
        <Button variant='inherit'>CREATE POLL</Button>
        </NavLink>
      </Toolbar>
    </AppBar>
  </Box>
  )
}

export default Navbar_mod