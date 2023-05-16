import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import InputAdornment from '@mui/material/InputAdornment';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import TextField from '@mui/material/TextField';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import { AccountCircle, Add, Cancel, Edit } from "@mui/icons-material";
import { IconButton, Input, OutlinedInput } from "@mui/material";

const theme = createTheme();


const Create_poll = () => {
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
        <Typography component="h1" variant="h3" fontFamily='inherit'>
          Create a Poll
        </Typography>
        <Typography component="h6" fontSize='20' fontFamily='inherit' color='gray'>
          Complete the below fields to create your poll.
        </Typography>
        <br></br>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
            <FormControl sx={{ m: 0, minWidth: 80 }} required fullWidth>
        <InputLabel id="demo-simple-select-autowidth-label">Poll tag</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={polltype}
          onChange={handleChange}
          autoWidth
          label="Poll tag"
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
            <Grid item xs={12} sm={6}>
            <FormControl sx={{ m: 0, minWidth: 80 }} required fullWidth>
        <InputLabel id="demo-simple-select-autowidth-label">Poll type</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={polltype}
          onChange={handleChange}
          autoWidth
          label="Poll type"
        >
          <MenuItem value={20}>Public</MenuItem>
          <MenuItem value={21}>Private</MenuItem>
        </Select>
      </FormControl>
            </Grid>
            <Grid item xs={12} >
            <TextField
          id="outlined-multiline-flexible"
          label="Poll question"
          placeholder="Type your question here"
          multiline
          fullWidth
          maxRows={4}
        />
            </Grid>
            <Grid item xs={12} >
              <Typography textAlign='left' fontSize='10'>Answer options</Typography>
            <OutlinedInput
          id="outlined-multiline-flexible"
          placeholder="option 1"
          multiline
          fullWidth
          maxRows={4}
          endAdornment={
            <InputAdornment position="end">
              <IconButton>
                <Cancel/>
              </IconButton>
            </InputAdornment>
          }
        />
            </Grid>
            <Grid item xs={12} >
            <OutlinedInput
          id="outlined-multiline-flexible"
          placeholder="option 2"
          multiline
          fullWidth
          maxRows={4}
          endAdornment={
            <InputAdornment position="end">
              <IconButton>
                <Cancel/>
              </IconButton>
            </InputAdornment>
          }
        />
            </Grid>
            <Grid item xs={12} md={6}>
            <Button variant="text" startIcon={<Add/>}>
               Add option
            </Button>
            </Grid>
            <br></br>
            <Grid item xs={12}>
              
            <Button
            type="submit"
            fullWidth
            variant="contained"
            color="error"
            sx={{ mt:1, mb: 2 }}
          >
            Send for Approval
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

export default Create_poll