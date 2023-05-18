import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Placeholder from "./placeholder.jpeg";

const Mod_cards = () => {
  return (
    <div>
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
        
              <Button size="large" style={{fontWeight:"bold"}} variant="contained">RESULT</Button>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <Typography>Leftover Time</Typography>
              
        </CardActions>
      </Card>
    </div>
  );
};

export default Mod_cards;