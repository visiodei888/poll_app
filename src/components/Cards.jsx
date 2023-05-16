import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import Placeholder from "./placeholder.jpg";

const Home = () => {
  return (
    <div>
      <Card
        sx={{ maxWidth: 250 }}
        style={{
          backgroundColor: "rgb(50,50,50)",
          color: "white",
          borderRadius: "5%",
          margin: "25px",
        }}
      >
        <CardMedia sx={{ height: 140 }} image={Placeholder} title="sport" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Moderator
          </Typography>
          <Typography variant="body2" color="white">
            Who is the greatest of all time?
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" style={{fontWeight:"bold"}}>Vote</Button>
          <Typography>Tag</Typography>
        </CardActions>
      </Card>
    </div>
  );
};

export default Home;
