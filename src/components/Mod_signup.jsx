import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import axios from 'axios';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © '}
        <Link color="inherit" href="https://mui.com/">
          Your Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Mod_signup = () => {
  const [formData, setFormData] = React.useState({
    firstName: '',
    role: '',
    username: '',
    password: '',
    polltype:''
    });


  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post('http://localhost:8000/signup', formData)
      .then((response) => {
        // User created successfully
        // Reset form data
        setFormData({
          firstName: '',
          role: '',
          username: '',
          password: '',
          polltype:''
        });
      })
      .catch((error) => {
        console.error('Error creating user:', error);
        // Handle error
      });
  };
 

  const handleChange = (event) => {
    const { name, value } = event.target;
  
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value
    }));
  };
  
    
  return (
    <ThemeProvider theme={createTheme()}>
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: 'blue' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5" fontFamily='fantasy'>
          MODERATOR SIGN UP
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                value={formData.firstName}
                  onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="role"
                label="Role"
                name="role"
                value={formData.role}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={formData.username}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
                value={formData.password}
                  onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12}>
              {/* <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              /> */}
            </Grid>
            <Grid item xs={12}>
            <FormControl sx={{ m: 0, minWidth: 80 }} required fullWidth>
        <InputLabel id="demo-simple-select-autowidth-label">Poll tag preference</InputLabel>
        <Select
        name="polltype"
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={formData.polltype}
          onChange={handleChange}
          autoWidth
          label="Poll tag preference"
        >
          <MenuItem value="">
            <em>NONE</em>
          </MenuItem>
          <MenuItem value="ANY">ANY</MenuItem>
          
        </Select>
      </FormControl>
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Create an Account
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  </ThemeProvider>
  )
}

export default Mod_signup