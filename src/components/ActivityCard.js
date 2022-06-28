import React from "react";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = () => ({
  root: {
    padding: 20,
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
        <CardContent
          style={{
            fontFamily: "Inter",
            fontSize: "16px",
            padding: 0,
            marginTop: 20,
          }}
        >
          <p className={classes.text}>Projects page is now up!</p>
          <p style={{ marginTop: 10, color: "#C1C1C1" }}>
            Check it out here! Featuring a new post about my time as
            Wealthsimple...
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(ActivityCard);
