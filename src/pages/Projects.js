import React, { useState } from "react";
import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";
import ProjectCard from "../components/ProjectCard";
import SideNav from "../components/SideNav";
import projects from "../collections/projects";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import ModalContent from "../components/ModalContent";

const styles = () => ({});

const Projects = ({ classes }) => {
  const projectTabs = [
    {
      name: "Software & UI",
      url: "",
    },
    {
      name: "3D Design",
      url: "",
    },
    {
      name: "In Progress",
      url: "",
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);

  const showProjectDetails = (i) => {
    setCurrentCard(i);
    setTimeout(() => setShowModal(true), 100);
  };

  const hideProjectDetails = () => {
    setShowModal(false);
    setTimeout(() => setCurrentCard(null), 100);
  };

  return (
    <Grid container xs={12}>
      <Grid xs={1}>
        <SideNav tabs={projectTabs} />
      </Grid>
      <Grid container justifyContent="center" xs={11} style={{ padding: 50 }}>
        {projects.map((project, i) => (
          <Grid xs="auto" item style={{ padding: 50 }}>
            <ProjectCard
              project={project}
              showProjectDetails={() => showProjectDetails(i)}
              current={currentCard === i}
            />
          </Grid>
        ))}
      </Grid>
      <Rodal
        visible={showModal}
        duration={500}
        onClose={() => hideProjectDetails()}
        customStyles={{ overflow: "scroll", width: "65%", height: "90%" }}
      >
        <ModalContent project={projects[currentCard]} />
      </Rodal>
    </Grid>
  );
};

export default withStyles(styles)(Projects);
