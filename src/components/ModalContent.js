import React from "react";
import { Container, Box, Divider } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = () => ({});

const ModalContent = ({ classes, project }) => {
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
          <br />
          <Divider />
          <br />
          <br />
          {project.subProjects.map((subProject) => (
            <>
              <h2>{subProject.title}</h2>
              <br />
              <p>{subProject.description}</p>
            </>
          ))}
        </>
      )}
    </Container>
  );
};

export default withStyles(styles)(ModalContent);
