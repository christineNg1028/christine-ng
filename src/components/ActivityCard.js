import React from "react";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = () => ({
  root: {
    padding: "20px 20px 0 20px",
    borderRadius: 0,
    textAlign: "left",
  },
  media: {
    height: 275,
  },
});

const ActivityCard = ({ classes }) => {
  return (
    <Card className={classes.root}>
      <CardActionArea disableRipple>
        <CardMedia
          className={classes.media}
          image="/images/SYDE_Picnic_2021.JPG"
          title="SYDE"
        />
        <CardContent>
          <p className={classes.text}>Lorem ipsum</p>
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(ActivityCard);
