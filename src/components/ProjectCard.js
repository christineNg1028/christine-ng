import React, { useState } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Chip,
  CardMedia,
} from "@mui/material";
import { withStyles } from "@mui/styles";
import { tagColors } from "../collections/projects";
import ReactCardFlip from "react-card-flip";
import sanityClient from "../client.js";
import imageUrlBuilder from "@sanity/image-url";

const styles = () => ({
  root: {
    padding: "20px 20px 0 20px",
    borderRadius: 0,
    width: "395px",
    height: "280px",
  },
  media: {
    height: "160px",
  },
});

const ProjectCard = ({ classes, project, showProjectDetails, current }) => {
  const builder = imageUrlBuilder(sanityClient);

  const urlFor = (source) => {
    return builder.image(source);
  };

  const [lightsOn, setLightsOn] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      <img
        src={
          lightsOn || current
            ? "/graphics/FairyLightsOn.png"
            : "/graphics/FairyLightsOff.png"
        }
        alt="Fairy Lights"
        style={{ position: "absolute", left: -45, bottom: -65 }}
      />
      <ReactCardFlip
        isFlipped={current}
        flipSpeedFrontToBack={0.5}
        flipSpeedBackToFront={0.5}
      >
        <Card
          className={classes.root}
          onMouseEnter={() => setLightsOn(true)}
          onMouseLeave={() => setLightsOn(false)}
        >
          <CardActionArea disableRipple onClick={() => showProjectDetails()}>
            <CardMedia
              className={classes.media}
              image={urlFor(project.img).url()}
              title={project.title}
            />
            <CardContent>
              <p style={{ fontSize: 20 }}>{project.title}</p>
              <br />
              {project.tags.map((tag) => (
                <Chip
                  size="small"
                  label={tag}
                  style={{ margin: 3, backgroundColor: tagColors(tag) }}
                />
              ))}
            </CardContent>
          </CardActionArea>
        </Card>
        <Card
          className={classes.root}
          onMouseEnter={() => setLightsOn(true)}
          onMouseLeave={() => setLightsOn(false)}
        >
          <CardMedia className={classes.media} />
        </Card>
      </ReactCardFlip>
    </div>
  );
};

export default withStyles(styles)(ProjectCard);
