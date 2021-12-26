import React, { useState, useRef, useEffect } from "react";
import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";
import ProjectCard from "../components/ProjectCard";
import SideNav from "../components/SideNav";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import ModalContent from "../components/ModalContent";
import sanityClient from "../client.js";
import { useHistory } from "react-router-dom";

const styles = () => ({});

const Projects = (props) => {
  const [softwareAndUI, setSoftwareAndUI] = useState([]);
  const [design, setDesign] = useState([]);
  const [inProgress, setInProgress] = useState([]);

  const history = useHistory();
  const { id } = props.match.params;
  const [showModal, setShowModal] = useState(false);
  const [currentCard, setCurrentCard] = useState(null);
  const [currentTab, setCurrentTab] = useState(0);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "project"]`)
      .then((data) => {
        const sortedProjects = data.sort(
          (a, b) => new Date(b.startDate) - new Date(a.startDate)
        );
        setSoftwareAndUI(
          sortedProjects.filter(({ category }) => category === "Software & UI")
        );
        setDesign(
          sortedProjects.filter(({ category }) => category === "3D Design")
        );
        setInProgress(
          sortedProjects.filter(({ category }) => category === "In Progress")
        );
      })
      .catch(console.error);

    if (id) {
      sanityClient
        .fetch(`*[_type == "project" && _id == "${id}"]`)
        .then((data) => {
          showProjectDetails(data[0]);
        })
        .catch(console.error);
    }
  }, [id]);

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

  const showProjectDetails = (project) => {
    setCurrentCard(project);
    setShowModal(true);
  };

  const hideProjectDetails = () => {
    history.push("/projects");
    setShowModal(false);
    setCurrentCard(null);
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
      <Grid container xs={11} style={{ padding: 50 }}>
        <Grid container ref={tabs[0].ref} style={{ marginBottom: 75 }}>
          {softwareAndUI.map((project) => (
            <Grid xs="auto" item style={{ padding: 50 }}>
              <ProjectCard project={project} current={project._id === id} />
            </Grid>
          ))}
        </Grid>
        <Grid container ref={tabs[1].ref} style={{ marginBottom: 75 }}>
          {design.map((project) => (
            <Grid xs="auto" item style={{ padding: 50 }}>
              <ProjectCard
                project={project}
                current={currentCard === project}
              />
            </Grid>
          ))}
        </Grid>
        <br />
        <br />
        <br />
        <Grid container ref={tabs[2].ref} style={{ marginBottom: 75 }}>
          {inProgress.map((project) => (
            <Grid xs="auto" item style={{ padding: 50 }}>
              <ProjectCard
                project={project}
                current={currentCard === project}
              />
            </Grid>
          ))}
        </Grid>
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
