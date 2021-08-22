import React from "react";
import { Grid, withStyles } from "@material-ui/core";
import Rectangle from "../graphics/Rectangle.svg";
import PaperclipL from "../graphics/PaperclipL.svg";
import PaperclipR from "../graphics/PaperclipR.svg";
import Headshot from "../images/Headshot.jpg";
import Portrait from "../images/Portrait.jpg";

const styles = () => ({
  leftImageContainer: {
    position: "relative",
    width: "500px",
    marginTop: 50,
    marginRight: 50,
  },

  leftRect: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },

  leftImage: {
    display: "block",
    width: "335px",
    marginTop: "-445px",
    marginLeft: "115px",
    opacity: "75%",
    border: "25px solid white",
    filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25))",
    transform: "rotate(-13.1deg)",
  },

  leftPaperclip: {
    position: "absolute",
    top: 0,
    right: 75,
    height: "166px",
  },

  rightImageContainer: {
    position: "relative",
    width: "500px",
    marginLeft: 50,
  },

  rightRect: {
    display: "block",
    width: "425px",
    height: "500px",
  },

  rightImage: {
    display: "block",
    width: "335px",
    marginTop: "-490px",
    opacity: "75%",
    border: "25px solid white",
    filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25))",
    transform: "rotate(4.37deg)",
  },

  rightPaperclip: {
    position: "absolute",
    top: -40,
    right: 115,
    height: "146px",
  },
});

const Home = ({ classes }) => {
  return (
    <Grid
      container
      spacing={10}
      justify="center"
      alignItems="center"
      style={{ height: 750 }}
    >
      <Grid item justify="center">
        <div className={classes.leftImageContainer}>
          <img className={classes.leftRect} src={Rectangle} alt="Rectangle" />
          <img className={classes.leftImage} src={Headshot} alt="Headshot" />
          <img
            className={classes.leftPaperclip}
            src={PaperclipL}
            alt="Paperclip"
          />
        </div>
      </Grid>
      <Grid item justify="center">
        <div className={classes.rightImageContainer}>
          <img className={classes.rightRect} src={Rectangle} alt="Rectangle" />
          <img className={classes.rightImage} src={Portrait} alt="Portrait" />
          <img
            className={classes.rightPaperclip}
            src={PaperclipR}
            alt="Paperclip"
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Home);
