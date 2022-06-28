import React from "react";
import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";
import { urlFor } from "../utils.js";

const styles = () => ({
  profileContainer: {
    height: "100%",
  },

  profileImage: {
    width: "285px",
    height: "425px",
    opacity: "85%",
    transform: "matrix(0.98, 0.18, -0.18, 0.98, 0, 0)",
    position: "relative",
    objectFit: "cover",
  },

  tapeRTL: {
    position: "absolute",
    top: -100,
    left: -10,
    width: "35%",
    height: "35%",
  },

  tapeRBR: {
    position: "absolute",
    bottom: -92,
    right: 0,
    width: "35%",
    height: "35%",
  },

  tapeLTL: {
    position: "absolute",
    top: -52,
    left: -140,
    width: "50%",
    height: "50%",
  },

  tapeLBR: {
    position: "absolute",
    bottom: -48,
    right: -140,
    width: "50%",
    height: "50%",
  },

  imgContainer: {
    position: "relative",
  },
});

const Profile = ({ classes, profile }) => {
  return (
    <Grid
      className={classes.profileContainer}
      container
      justifyContent="center"
    >
      <Grid container xs={5} justifyContent="center" alignItems="center">
        <div className={classes.textL}>
          <p className={classes.header}>{profile.header}</p>
          <br />
          <br /> {profile.description} <br />
          <br />
        </div>
      </Grid>
      <Grid container xs={5} justifyContent="center" alignItems="center">
        <div className={classes.imgContainer}>
          <img
            className={classes.profileImage}
            src={urlFor(profile.img).url()}
            alt="Portrait"
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Profile);
