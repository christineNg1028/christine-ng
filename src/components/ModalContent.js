import React, { useState, useEffect } from "react";
import { Container, Box, Divider, IconButton } from "@mui/material";
import { withStyles } from "@mui/styles";
import FastAverageColor from "fast-average-color";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { urlFor, getFileUrl } from "../utils.js";
import BlockContent from "@sanity/block-content-to-react";

const styles = () => ({
  container: {
    textAlign: "left",
    padding: 50,
  },
  image: {
    opacity: 0.5,
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 4,
  },
  description: {
    lineHeight: "30px",
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
  const [projectColor, setProjectColor] = useState("");

  useEffect(() => {
    if (project) {
      fac
        .getColorAsync(urlFor(project.img).url())
        .then(({ value, hex }) => {
          setProjectColor(`rgba(${value[0]}, ${value[1]}, ${value[2]}, 0.5)`);
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
              backgroundColor: projectColor,
              borderRadius: "4px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <h1 style={{ marginRight: 5 }}>{project.title}</h1>
              {project.link && (
                <>
                  <br />
                  <div w="100%" className={classes.buttonWrapper}>
                    <IconButton href={project.link} target="_blank">
                      <BsBoxArrowUpRight fontSize="large" />
                    </IconButton>
                  </div>
                </>
              )}
            </Box>
            <Box sx={{ fontWeight: "bold" }}>
              {getDateText(project.startDate, project.endDate)}
            </Box>
          </Box>
          <br />
          <br />
          <BlockContent blocks={project.description} />
          <br />
          <br />
          <Divider />
          <br />
          <br />
          {project.subProjects &&
            project.subProjects.map((subProject) => (
              <>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <h2 style={{ marginRight: 5 }}>{subProject.title}</h2>
                  {subProject.link && (
                    <IconButton href={subProject.link} target="_blank">
                      <BsBoxArrowUpRight fontSize="large" />
                    </IconButton>
                  )}
                </Box>
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
                <BlockContent blocks={subProject.description} />
                <br />
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
              </>
            ))}
        </>
      )}
    </Container>
  );
};

export default withStyles(styles)(ModalContent);
