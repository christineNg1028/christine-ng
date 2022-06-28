import React, { useState } from "react";
import { Card, CardActionArea, Chip, CardMedia, Box } from "@mui/material";
import { withStyles } from "@mui/styles";
import ReactCardFlip from "react-card-flip";
import { urlFor } from "../utils.js";
import { useHistory } from "react-router-dom";

const styles = () => ({
  root: {
    padding: "20px 20px 0 20px",
    borderRadius: 0,
    width: "395px",
    height: "280px",
    textAlign: "left",
  },
  media: {
    height: "160px",
  },
});

const ProjectCard = ({ classes, project, current }) => {
  const [lightsOn, setLightsOn] = useState(false);
  const history = useHistory();

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
          <CardActionArea
            disableRipple
            onClick={() => history.push(`/projects/${project._id}`)}
          >
            <CardMedia
              className={classes.media}
              image={urlFor(project.img).url()}
              title={project.title}
            />
            <Box margin={1} style={{ fontFamily: "Inter" }}>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                marginBottom={1}
              >
                <p style={{ fontSize: 20 }}>{project.title}</p>
                <div>
                  {project.tags.map((tag) => (
                    <Chip
                      size="small"
                      label={tag}
                      style={{
                        margin: 3,
                        backgroundColor: "rgba(0, 0, 0, 0.72)",
                        color: "#fff",
                        borderRadius: "4px",
                      }}
                    />
                  ))}
                </div>
              </Box>
              <p style={{ fontSize: 14 }}>{project.subtitle}</p>
            </Box>
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
