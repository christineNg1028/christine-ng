import React from "react";
import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = (theme) => ({
  paper: {
    backgroundImage: "url(/graphics/LinedPaper.svg)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    width: "100%",
  },
  previewOverlay: {
    position: "absolute",
    width: "100%",
    height: "100%",
    bottom: 0,
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.25) 25%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0.75) 75%, #FFFFFF 100%)",
  },
  preview: {
    position: "relative",
  },
  readMore: {
    fontStyle: "italic",
    textDecoration: "none",
    color: theme.palette.primary.contrastText,
    background:
      "linear-gradient(to right, rgba(255,255,255,0) 50%, #CAFFED 50%)",
    backgroundSize: "200% auto",
    transition: "background-position 0.2s ease-out",
    "&:hover": {
      backgroundPosition: "-99.99% 0",
    },
  },
});

const JournalCard = ({ classes }) => {
  return (
    <Grid container className={classes.paper}>
      <Grid container xs="5" padding="50px 25px 25px 25px">
        <img
          src="/images/Headshot.jpg"
          width="100%"
          height="200px"
          style={{ objectFit: "cover" }}
          alt=""
        />
      </Grid>
      <Grid
        container
        xs="7"
        padding="50px 25px 25px 25px"
        alignContent="space-between"
      >
        <Grid item textAlign="left">
          <p className={classes.text}>Lorem ipsum</p>
          <p>Lorem ipsum dolor sit amet</p>
          <br />
          <div className={classes.preview}>
            <p style={{ lineHeight: "25px" }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
              consectetur adipiscing elit.
            </p>
            <div className={classes.previewOverlay} />
          </div>
        </Grid>
        <Grid item textAlign="right" width="100%">
          <a href="/" className={classes.readMore}>
            Read more {">"}
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(JournalCard);
