import React from "react";
import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";
import socials from "../collections/socials";

const styles = (theme) => ({
  footerContainer: {
    background: "white",
    height: "100px",
    borderTop: `2px solid ${theme.palette.primary.main}`,
    paddingLeft: 50,
    paddingRight: 50,
    fontFamily: "Newsreader",
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
      <Grid container xs={4} justifyContent="center">
        Christine Ng © 2023
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(Footer);
