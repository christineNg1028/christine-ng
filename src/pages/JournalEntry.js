import React, { useState, useEffect } from "react";
import { Grid, Container } from "@mui/material";
import { withStyles } from "@mui/styles";
import sanityClient from "../client.js";
import { urlFor, getDateTimeText } from "../utils.js";
import BlockContent from "@sanity/block-content-to-react";

const styles = () => ({
  header: {
    fontFamily: "Newsreader",
    fontSize: 30,
  },
});

const JournalEntry = ({ classes, match }) => {
  const { id } = match.params;
  const [entry, setEntry] = useState();

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "journalEntry" && _id == "${id}"]`)
      .then((data) => {
        setEntry(data[0]);
      })
      .catch(console.error);
  }, [id]);

  return entry ? (
    <>
      <Container maxWidth="md" style={{ paddingTop: 50 }}>
        <Grid container justifyContent="center">
          <img src={urlFor(entry.thoughtBubble).url()} width="100%" alt="" />
        </Grid>
      </Container>
      <Container maxWidth="md" style={{ paddingBottom: 100 }}>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          style={{ marginTop: 50 }}
        >
          <p className={classes.header}>{entry.title}</p>
          <p>{getDateTimeText(entry._createdAt)}</p>
        </Grid>
        <Grid style={{ marginTop: 50 }} textAlign="left">
          <p style={{ lineHeight: "30px" }}>
            <BlockContent blocks={entry.content} />
          </p>
        </Grid>
      </Container>
    </>
  ) : (
    <></>
  );
};

export default withStyles(styles)(JournalEntry);
