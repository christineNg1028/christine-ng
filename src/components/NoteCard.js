import React, { useState } from "react";
import { Grid, IconButton } from "@mui/material";
import { withStyles } from "@mui/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import BlockContent from "@sanity/block-content-to-react";

const styles = () => ({
  root: {
    backgroundImage: "url(/graphics/LinedPaper.svg)",
    backgroundSize: "cover",
    padding: 20,
    borderRadius: 0,
    textAlign: "left",
    filter: "drop-shadow(10px 15px 5px rgba(0, 0, 0, 0.20))",
    fontFamily: "Newsreader",
    lineHeight: "25px",
  },
});

const NoteCard = ({ classes, note }) => {
  //   const [love, setLove] = useState(false);
  //   const [like, setLike] = useState(false);
  //   const [dislike, setDislike] = useState(false);
  //   const [star, setStar] = useState(false);

  return (
    <Grid className={classes.root}>
      <br />
      <p className={classes.carouselCardHeader}>{note.title}</p>
      <p
        style={{
          marginTop: 10,
          fontSize: 16,
        }}
      >
        <BlockContent blocks={note.content} />
      </p>
      <br />
      {/* <Grid container justifyContent="center">
        <IconButton
          style={
            love
              ? {
                  backgroundColor: "#fff",
                  color: "#ff8577",
                  filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.20))",
                }
              : { color: "#C1C1C1" }
          }
          disableRipple
          onClick={() => setLove(!love)}
        >
          {love ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
        <IconButton
          style={
            like
              ? {
                  backgroundColor: "#fff",
                  color: "#0fa958",
                  filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.20))",
                }
              : { color: "#C1C1C1" }
          }
          disableRipple
          onClick={() => setLike(!like)}
        >
          {like ? <ThumbUpAltIcon /> : <ThumbUpOffAltIcon />}
        </IconButton>
        <IconButton
          style={
            dislike
              ? {
                  backgroundColor: "#fff",
                  color: "#699bf7",
                  filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.20))",
                }
              : { color: "#C1C1C1" }
          }
          disableRipple
          onClick={() => setDislike(!dislike)}
        >
          {dislike ? <ThumbDownAltIcon /> : <ThumbDownOffAltIcon />}
        </IconButton>
        <IconButton
          style={
            star
              ? {
                  backgroundColor: "#fff",
                  color: "#ffc700",
                  filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.20))",
                }
              : { color: "#C1C1C1" }
          }
          disableRipple
          onClick={() => setStar(!star)}
        >
          {star ? <StarIcon /> : <StarBorderIcon />}
        </IconButton>
      </Grid> */}
    </Grid>
  );
};

export default withStyles(styles)(NoteCard);
