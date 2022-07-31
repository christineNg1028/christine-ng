import React, { useState, useEffect } from "react";
import { Grid, Container, Paper } from "@mui/material";
import { withStyles } from "@mui/styles";
import sanityClient from "../client.js";
import { urlFor } from "../utils.js";
import JournalCard from "../components/JournalCard.js";

const styles = () => ({
  introText: {
    width: 500,
  },

  header: {
    fontFamily: "Newsreader",
    fontSize: 30,
    // textShadow: "0px 2px 2px rgba(0, 0, 0, 0.2)",
  },

  text: { fontSize: 18 },
});

const Journal = ({ classes }) => {
  const [allEntries, setAllEntries] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "journalEntry"]`)
      .then((data) => {
        console.log(data);
        setAllEntries(data);
      })
      .catch(console.error);
  }, []);

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
      {allEntries.map((entry) => (
        <Grid style={{ marginBottom: 50 }}>
          <JournalCard classes={classes} entry={entry} />
        </Grid>
      ))}
    </Container>
  );
};

export default withStyles(styles)(Journal);
