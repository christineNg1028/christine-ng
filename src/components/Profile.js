import React from "react";
import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = () => ({
  profileContainer: {
    height: "100%",
  },

  profileImage: {
    width: "285px",
    height: "425px",
    opacity: "75%",
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

  profileImageL: {
    width: "335px",
    height: "475px",
    opacity: "75%",
    border: "25px solid white",
    filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
    transform: "rotate(-18.85deg)",
    position: "relative",
    objectFit: "none",
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
          <span
            style={{
              background: `linear-gradient(180deg,rgba(255,255,255,0) 55%, ${profile.color} 55%)`,
            }}
          >
            {profile.header}
          </span>
          <br />
          <br /> {profile.description} <br />
          <br />
          Read more here.
        </div>
      </Grid>
      <Grid container xs={5} justifyContent="center" alignItems="center">
        <div className={classes.imgContainer}>
          <img
            className={classes.profileImage}
            src={profile.img}
            alt="Portrait"
          />
        </div>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Profile);
