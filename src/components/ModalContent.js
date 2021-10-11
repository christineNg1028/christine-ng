import React, { useState, useEffect } from "react";
import { Container, Box, Divider, Button } from "@mui/material";
import { withStyles } from "@mui/styles";
import FastAverageColor from "fast-average-color";
import { BsBoxArrowUpRight } from "react-icons/bs";
import { Link } from "react-router-dom";

const styles = () => ({});

const ModalContent = ({ classes, project }) => {
  const fac = new FastAverageColor();
  const [avgColor, setAvgColor] = useState("#000");
  const [contrastColor, setContrastColor] = useState("#fff");

  useEffect(() => {
    fac
      .getColorAsync("/images/projects/BetterBytes.png")
      .then((color) => {
        setAvgColor(color.hex);
        setContrastColor(color.isLight ? "#000" : "#fff");
      })
      .catch((e) => {
        console.log(e);
      });
  });

  return (
    <Container style={{ textAlign: "left", padding: 50 }}>
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
              src={project.img}
              style={{
                opacity: 0.4,
                position: "absolute",
                left: 0,
                top: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: 4,
              }}
              alt={project.title}
            />
            <Box sx={{ display: "flex" }}>
              <h1>{project.title}</h1>
            </Box>
            <Box sx={{ fontWeight: "bold" }}>Jan - Apr</Box>
          </Box>
          <br />
          <br />
          <p style={{ lineHeight: "25px" }}>{project.description}</p>
          <br />
          <div w="100%" style={{ textAlign: "center" }}>
            <Link
              href={project.link}
              target="_blank"
              style={{ textDecoration: "none" }}
            >
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
                }}
              >
                See Project
              </Button>
            </Link>
          </div>
          <br />
          <Divider />
          <br />
          <br />
          {project.subProjects.map((subProject) => (
            <div>
              <h2>{subProject.title}</h2>
              <br />
              <img src={subProject.img} alt={subProject.title} />
              <br />
              <p>{subProject.video}</p>
              <br />
              <p>{subProject.description}</p>
              <br />
              <p>{subProject.link}</p>
              <br />
              <h4>Key Features</h4>
              <ul>
                {subProject.keyFeatures.map((feature) => (
                  <li>{feature}</li>
                ))}
              </ul>
              <br />
              <h4>What I learned & accomplished</h4>
              <br />
              <ul>
                {subProject.highlights.map((highlight) => (
                  <li style={{ marginBottom: "10px" }}>{highlight}</li>
                ))}
              </ul>
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
