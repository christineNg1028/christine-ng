import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";
import ProjectCard from "../components/ProjectCard";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import ModalContent from "../components/ModalContent";
import sanityClient from "../client.js";
import { useHistory } from "react-router-dom";

const styles = () => ({});

const Projects = (props) => {
  const [projects, setProjects] = useState([]);
  const history = useHistory();
  const { id } = props.match.params;
  const [showModal, setShowModal] = useState(false);
  const [currentCard, setCurrentCard] = useState();

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "project"]`)
      .then((data) => {
        const sortedProjects = data.sort(
          (a, b) => new Date(b.startDate) - new Date(a.startDate)
        );
        setProjects(
          sortedProjects.filter(({ category }) => category === "Software & UI")
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

  const showProjectDetails = (project) => {
    setCurrentCard(project);
    setShowModal(true);
  };

  const hideProjectDetails = () => {
    history.push("/projects");
    setShowModal(false);
    setCurrentCard(null);
  };

  return (
    <Grid container style={{ padding: 50 }}>
      <Grid container justifyContent="center" style={{ marginBottom: 75 }}>
        {projects.map((project) => (
          <Grid xs="auto" item style={{ padding: 50 }}>
            <ProjectCard project={project} current={project._id === id} />
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
