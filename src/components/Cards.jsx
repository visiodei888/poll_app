import React from "react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Placeholder from "./placeholder.jpeg";



const Cards = () => {

  
return (
    <Box sx={{padding: 3 }}>
      <Card
        sx={{ maxWidth: 300, maxHeight:650}}
        style={{
          backgroundColor: "rgb(50,50,50)",
          color: "white",
          borderRadius: "5%",
          margin: "25px",
        }}
      >
        <CardMedia sx={{ height: 200 }} image={Placeholder} title="sport" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Moderator
          </Typography>
          <Typography variant="body2" color="white">
            Who is the greatest of all time?
          </Typography>
        </CardContent>
        <CardActions>
        
              <Button size="large" style={{fontWeight:"bold"}}>Vote</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Typography>Tag</Typography>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Typography>Moderator</Typography>
        </CardActions>
      </Card>
    </Box>
  );
};

export default Cards;
