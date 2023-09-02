import React, { useState, useEffect } from "react";
import { Grid, Container } from "@mui/material";
import { withStyles } from "@mui/styles";
import sanityClient from "../client.js";
import JournalCard from "../components/JournalCard.js";

const styles = () => ({
  header: {
    fontFamily: "Newsreader",
    fontSize: 30,
    marginBottom: "50px"
  },
});

const Journal = ({ classes }) => {
  const [allEntries, setAllEntries] = useState([]);
  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "journalEntry"]`)
      .then((data) => {
        setAllEntries(
          data.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt))
        );
      })
      .catch(console.error);
  }, []);

  return (
    <Container maxWidth="lg" style={{ padding: 100 }}>
       <Grid container justifyContent="center" style={{ marginBottom: "100px" }}>
        <img src="/graphics/Quill.svg" />
      </Grid>
      <Grid container justifyContent="center" className={classes.header}>
        Welcome to brain dump central 💭
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
