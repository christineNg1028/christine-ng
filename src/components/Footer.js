import React from "react";
import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";
import socials from "../collections/socials";

const styles = () => ({
  footerContainer: {
    background: "white",
    height: "130px",
    borderTop: "2px solid #d8c7b5",
    paddingLeft: 50,
    paddingRight: 50,
  },
  socials: {
    display: "flex",
    width: "100%",
    paddingTop: 12,
    alignItems: "center",
    marginLeft: -6,
  },
  socialIcon: {
    margin: 6,
    "&:hover": {
      animation: "float 1.5s ease-in-out infinite",
    },
  },
});

const Footer = ({ classes }) => {
  return (
    <Grid container alignItems="center" className={classes.footerContainer}>
      <Grid container xs={4}>
        Connect With Me
        <div className={classes.socials}>
          {socials.map((social) => (
            <a href={social.url} target="_blank" rel="noreferrer">
              <img
                src={social.icon}
                alt={social.name}
                className={classes.socialIcon}
              />
            </a>
          ))}
        </div>
      </Grid>
      <Grid container xs={4} justifyContent="center"></Grid>
      <Grid container xs={4} justify="flex-end"></Grid>
    </Grid>
  );
};

export default withStyles(styles)(Footer);
