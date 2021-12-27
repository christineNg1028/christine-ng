import React, { useState, useEffect } from "react";
import { Grid, Container, Paper } from "@mui/material";
import { withStyles } from "@mui/styles";
import sanityClient from "../client.js";
import { urlFor } from "../utils.js";
import JournalCard from "../components/JournalCard.js";

const styles = () => ({
  introText: {
    width: 555,
  },

  header: { fontSize: 50 },

  text: { fontSize: 20 },
});

const Journal = ({ classes }) => {
  useEffect(() => {}, []);

  return (
    <Container maxWidth="lg" style={{ padding: 100 }}>
      <Grid container justifyContent="center">
        <div className={classes.introText}>
          <p className={classes.header}>Welcome to my journal</p>
          <br />
          <p className={classes.text}>
            Here, I write freely about my experiences, things I’ve learned,
            think about, dream of...
            <br />
            <br /> Enjoy :)
          </p>
        </div>
      </Grid>
      <Grid container justifyContent="center" style={{ padding: 100 }}>
        <img src="/graphics/Quill.svg" />
      </Grid>
      <Grid style={{ marginBottom: 50 }}>
        <JournalCard classes={classes} />
      </Grid>
      <Grid style={{ marginBottom: 50 }}>
        <JournalCard classes={classes} />
      </Grid>
    </Container>
  );
};

export default withStyles(styles)(Journal);
