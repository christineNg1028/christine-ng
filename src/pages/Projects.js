import React, { useState, useRef, useEffect } from "react";
import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";
import ProjectCard from "../components/ProjectCard";
import SideNav from "../components/SideNav";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import ModalContent from "../components/ModalContent";
import sanityClient from "../client.js";

const styles = () => ({});

const Projects = ({ classes }) => {
  const [softwareAndUI, setSoftwareAndUI] = useState([]);
  const [design, setDesign] = useState([]);
  const [inProgress, setInProgress] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "project"]`)
      .then((data) => {
        setSoftwareAndUI(
          data.filter(({ category }) => category === "Software & UI")
        );
        setDesign(data.filter(({ category }) => category === "3D Design"));
        setInProgress(
          data.filter(({ category }) => category === "In Progress")
        );
      })
      .catch(console.error);
  }, []);

  const tabs = [
    {
      name: "Software & UI",
      ref: useRef(null),
    },
    {
      name: "3D Design",
      ref: useRef(null),
    },
    {
      name: "In Progress",
      ref: useRef(null),
    },
  ];

  const [showModal, setShowModal] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);
  const [currentTab, setCurrentTab] = useState(0);

  const showProjectDetails = (project) => {
    setCurrentCard(project);
    setTimeout(() => setShowModal(true), 150);
  };

  const hideProjectDetails = () => {
    setShowModal(false);
    setTimeout(() => setCurrentCard(null), 150);
  };

  const handleTabClick = (i) => {
    tabs[i].ref.current.scrollIntoView({ behavior: "smooth" });
    setCurrentTab(i);
  };

  return (
    <Grid container xs={12}>
      <Grid xs={1}>
        <SideNav
          tabs={tabs}
          currentTab={currentTab}
          onTabClick={handleTabClick}
        />
      </Grid>
      <Grid
        ref={tabs[0].ref}
        container
        justifyContent="center"
        xs={11}
        style={{ padding: 50 }}
      >
        {softwareAndUI.map((project) => (
          <Grid xs="auto" item style={{ padding: 50 }}>
            <ProjectCard
              project={project}
              showProjectDetails={() => showProjectDetails(project)}
              current={currentCard === project}
            />
          </Grid>
        ))}
      </Grid>
      <Grid
        ref={tabs[1].ref}
        container
        justifyContent="center"
        xs={11}
        style={{ padding: 50 }}
      >
        {design.map((project) => (
          <Grid xs="auto" item style={{ padding: 50 }}>
            <ProjectCard
              project={project}
              showProjectDetails={() => showProjectDetails(project)}
              current={currentCard === project}
            />
          </Grid>
        ))}
      </Grid>
      <Grid
        ref={tabs[2].ref}
        container
        justifyContent="center"
        xs={11}
        style={{ padding: 50 }}
      >
        {inProgress.map((project) => (
          <Grid xs="auto" item style={{ padding: 50 }}>
            <ProjectCard
              project={project}
              showProjectDetails={() => showProjectDetails(project)}
              current={currentCard === project}
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
        <ModalContent project={currentCard} />
      </Rodal>
    </Grid>
  );
};

export default withStyles(styles)(Projects);
