import React from "react";
import { Card, CardActionArea, CardContent, CardMedia } from "@mui/material";
import { withStyles } from "@mui/styles";
import { urlFor } from "../utils.js";

const styles = () => ({
  root: {
    padding: 20,
    borderRadius: 0,
    textAlign: "left",
    filter: "drop-shadow(10px 15px 5px rgba(0, 0, 0, 0.20))",
  },
  media: {
    height: 275,
  },
});

const ActivityCard = ({ classes, activity }) => {
  return (
    <Card className={classes.root}>
      <CardActionArea disableRipple href={activity.url}>
        <CardMedia
          className={classes.media}
          image={urlFor(activity.img).url()}
          title={activity.title}
        />
        <CardContent
          style={{
            padding: 0,
            marginTop: 20,
          }}
        >
          <p className={classes.carouselCardHeader}>{activity.title}</p>
          <p
            style={{
              marginTop: 10,
              fontSize: 14,
              lineHeight: "18px",
            }}
          >
            {activity.subtitle}
          </p>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default withStyles(styles)(ActivityCard);
