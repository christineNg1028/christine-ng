import React from "react";
import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";
import { urlFor, getDateTimeText } from "../utils";

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
    background: `linear-gradient(to right, rgba(255,255,255,0) 50%, ${theme.palette.secondary.light} 50%)`,
    backgroundSize: "200% auto",
    transition: "background-position 0.2s ease-out",
    "&:hover": {
      backgroundPosition: "-99.99% 0",
    },
  },
});

const JournalCard = ({ classes, entry }) => {
  const { content, img, title, _createdAt, _id } = entry;
  const contentPreview = content[0].children[0].text.substring(0, 250) + "...";

  return (
    <Grid container className={classes.paper}>
      <Grid container xs="5" padding="50px 12.5px 25px 25px">
        <img
          src={urlFor(img).url()}
          width="100%"
          height="200px"
          style={{ objectFit: "cover" }}
          alt=""
        />
      </Grid>
      <Grid
        container
        xs="7"
        padding="50px 25px 25px 12.5px"
        alignContent="space-between"
      >
        <Grid item textAlign="left">
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            style={{ marginBottom: 25 }}
          >
            <p className={classes.text}>{title}</p>
            <p>{getDateTimeText(_createdAt)}</p>
          </Grid>
          <div className={classes.preview}>
            <p style={{ lineHeight: "30px" }}>{contentPreview}</p>
            <div className={classes.previewOverlay} />
          </div>
        </Grid>
        <Grid item textAlign="right" width="100%">
          <a href={`/journal/${_id}`} className={classes.readMore}>
            Read more {">"}
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default withStyles(styles)(JournalCard);
