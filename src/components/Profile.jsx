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
import { AccountCircle, Edit } from "@mui/icons-material";

const theme = createTheme();

const Profile = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          username: data.get('username'),
          password: data.get('password'),
        });
      };

      const [polltype, setPollType] = React.useState("");
  const handleChange = (event) => {
    setPollType(event.target.value);
  };
  
  return (
    <ThemeProvider theme={theme}>
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
        <Avatar sx={{ m: 1, bgcolor: 'gray' }}>
          <AccountCircle />
        </Avatar>
        <Typography component="h1" variant="h5" fontFamily='fantasy'>
          USER PROFILE
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={10}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First Name"
                autoFocus
                /> 
                </Grid>
            <Grid item xs={12} sm={2}>
            <Avatar sx={{ m: 1, bgcolor: 'green' }} variant="rounded">
          <Edit />
        </Avatar>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="family-name"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
            <Avatar sx={{ m: 1, bgcolor: 'green' }} variant="rounded">
          <Edit />
        </Avatar>
            </Grid>
            <Grid item xs={12} sm={10}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12} sm={2}>
            <Avatar sx={{ m: 1, bgcolor: 'green' }} variant="rounded">
          <Edit />
        </Avatar>
            </Grid>
            <Grid item xs={12} sm={10}>
            <FormControl sx={{ m: 0, minWidth: 80 }} required fullWidth>
        <InputLabel id="demo-simple-select-autowidth-label">Poll tag preference</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={polltype}
          onChange={handleChange}
          autoWidth
          label="Poll tag preference"
        >
          <MenuItem value="">
            <em>NONE</em>
          </MenuItem>
          <MenuItem value={1}>SPORTS</MenuItem>
          <MenuItem value={2}>MOVIES</MenuItem>
          <MenuItem value={3}>TRAVEL</MenuItem>
        </Select>
      </FormControl>
            </Grid>
            <Grid item xs={12} sm={2}>
            <Avatar sx={{ m: 1, bgcolor: 'green' }} variant="rounded">
          <Edit />
        </Avatar>
            </Grid>
            <Grid item xs={12} sm={10}>
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="error"
            sx={{ mt: 3, mb: 2 }}
          >
            Apply Changes
          </Button>
            </Grid>
          </Grid>
          
          <Grid container justifyContent="flex-end">
          </Grid>
        </Box>
      </Box>
    </Container>
  </ThemeProvider>
  )
}

export default Profile