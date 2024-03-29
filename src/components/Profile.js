import React from "react";
import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";
import { urlFor } from "../utils.js";

const styles = (theme) => ({
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

  imgContainer: {
    position: "relative",
  },

  readMore: {
    fontStyle: "italic",
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
    background: `linear-gradient(to right, rgba(255,255,255,0) 50%, ${theme.palette.secondary.light} 50%)`,
    backgroundSize: "200% auto",
    transition: "background-position 0.2s ease-out",
    "&:hover": {
      backgroundPosition: "-99.99% 0",
    },
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
          {profile.path && (
            <a href={profile.path} className={classes.readMore}>
              See my work {">"}
            </a>
          )}
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
