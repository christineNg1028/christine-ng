import React, { useState, useEffect } from "react";
import { Container, Box, Divider, Button } from "@mui/material";
import { withStyles } from "@mui/styles";
import FastAverageColor from "fast-average-color";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { FiPaperclip } from "react-icons/fi";
import { urlFor, getFileUrl } from "../utils.js";

const styles = () => ({
  container: {
    textAlign: "left",
    padding: 50,
  },
  image: {
    opacity: 0.4,
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 4,
  },
  description: {
    lineHeight: "25px",
  },
  buttonWrapper: {
    textAlign: "center",
  },
});

const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const getDateText = (startDate, endDate) => {
  const startDateObject = new Date(startDate);
  const startDateText = `${
    MONTHS[startDateObject.getMonth()]
  } ${startDateObject.getFullYear()}`;
  const endDateObject = endDate && new Date(endDate);

  return endDateObject
    ? endDateObject.getMonth() === startDateObject.getMonth()
      ? startDateText
      : startDateText +
        ` - ${MONTHS[endDateObject.getMonth()]} ${endDateObject.getFullYear()}`
    : startDateText + " - Present";
};

const ModalContent = ({ classes, project }) => {
  const fac = new FastAverageColor();
  const [avgColor, setAvgColor] = useState("#000");
  const [contrastColor, setContrastColor] = useState("#fff");

  useEffect(() => {
    if (project) {
      fac
        .getColorAsync(urlFor(project.img).url())
        .then((color) => {
          console.log(color.isLight);
          setAvgColor(color.hex);
          setContrastColor(color.isLight ? "#000" : "#fff");
        })
        .catch((e) => {
          console.log(e);
        });
    }
  });

  return (
    <Container className={classes.container}>
      {project && (
        <>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 5,
              position: "relative",
            }}
          >
            <img
              src={urlFor(project.img).url()}
              className={classes.image}
              alt={project.title}
            />
            <Box sx={{ display: "flex" }}>
              <h1>{project.title}</h1>
            </Box>
            <Box sx={{ fontWeight: "bold" }}>
              {getDateText(project.startDate, project.endDate)}
            </Box>
          </Box>
          <br />
          <br />
          <p className={classes.description}>{project.description}</p>
          {project.link && (
            <>
              <br />
              <div w="100%" className={classes.buttonWrapper}>
                <Button
                  variant="contained"
                  size="large"
                  disableRipple
                  endIcon={<BsBoxArrowUpRight style={{ fontSize: "16px" }} />}
                  style={{
                    textTransform: "none",
                    backgroundColor: avgColor,
                    color: contrastColor,
                    border: `1px solid ${contrastColor}`,
                    opacity: 0.7,
                  }}
                  href={project.link}
                  target="_blank"
                >
                  See Project
                </Button>
              </div>
            </>
          )}
          <br />
          <Divider />
          <br />
          <br />
          {project.subProjects &&
            project.subProjects.map((subProject) => (
              <div>
                <h2>{subProject.title}</h2>
                <br />
                {subProject.img && (
                  <img
                    style={{ objectFit: "contain" }}
                    width="100%"
                    height="500px"
                    src={urlFor(subProject.img).url()}
                    alt={subProject.title}
                  />
                )}
                {subProject.video && (
                  <video width="100%" height="500px" autoPlay muted loop>
                    <source
                      src={getFileUrl(subProject.video.asset._ref)}
                      type="video/mp4"
                    />
                  </video>
                )}
                <br />
                <br />
                <p>{subProject.description}</p>
                <br />
                {subProject.link && (
                  <div w="100%" className={classes.buttonWrapper}>
                    <Button
                      variant="outlined"
                      size="large"
                      disableRipple
                      endIcon={<FiPaperclip style={{ fontSize: "16px" }} />}
                      style={{
                        textTransform: "none",
                        color: avgColor,
                        border: `1px solid ${avgColor}`,
                      }}
                      href={subProject.link}
                      target="_blank"
                    >
                      {subProject.title}
                    </Button>
                  </div>
                )}
                <br />
                {subProject.keyFeatures && (
                  <>
                    <h4>Key Features</h4>
                    <br />
                    <ul>
                      {subProject.keyFeatures.map((feature) => (
                        <li style={{ marginBottom: "10px" }}>{feature}</li>
                      ))}
                    </ul>
                    <br />
                  </>
                )}
                {subProject.highlights && (
                  <>
                    <h4>What I learned & accomplished</h4>
                    <br />
                    <ul>
                      {subProject.highlights.map((highlight) => (
                        <li style={{ marginBottom: "10px" }}>{highlight}</li>
                      ))}
                    </ul>
                  </>
                )}
                <br />
                <br />
              </div>
            ))}
        </>
      )}
    </Container>
  );
};

export default withStyles(styles)(ModalContent);
