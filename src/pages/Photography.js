import React, { useState, useRef, useEffect } from "react";
import { Grid, Container } from "@mui/material";
import { withStyles } from "@mui/styles";
import ProjectCard from "../components/ProjectCard";
import SideNav from "../components/SideNav";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import ModalContent from "../components/ModalContent";
import sanityClient from "../client.js";
import { useHistory } from "react-router-dom";
import { urlFor } from "../utils.js";

const styles = () => ({});

const Photography = (props) => {
  const [allPhotos, setAllPhotos] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "photography"]`)
      .then((data) => {
        const photoSources = data.reduce((acc, current) => {
          // get photos from current series
          const photoSeries = current.photos;
          // loop through each photo, get the url and push it to acc
          photoSeries.forEach((photo) => acc.push(urlFor(photo).url()));
          return acc;
        }, []);
        const photoGroups = photoSources.reduce((acc, current, i) => {
          // if even index, use slice to create new subarray
          if (i % 2 === 0) {
            acc.push(photoSources.slice(i, i + 2));
          }
          return acc;
        }, []);
        setAllPhotos(photoGroups);
      })
      .catch(console.error);
  }, []);

  return (
    <Container maxWidth="md" style={{ padding: 50 }}>
      <Grid container xs={12} spacing={2} justifyContent="center">
        {allPhotos.map((group, i) => {
          return i % 2 === 0 ? (
            <>
              <Grid container xs={6}>
                <img
                  style={{ objectFit: "contain", maxWidth: "95%" }}
                  height="425px"
                  src={group[0]}
                  alt=""
                />
              </Grid>
              <Grid container xs={4}>
                <img
                  style={{ objectFit: "contain", maxWidth: "95%" }}
                  width="85%"
                  height="425px"
                  src={group[1]}
                  alt=""
                />
              </Grid>
            </>
          ) : (
            <>
              <Grid container xs={4} justifyContent="flex-end">
                <img
                  style={{ objectFit: "contain", maxWidth: "95%" }}
                  width="85%"
                  height="425px"
                  src={group[0]}
                  alt=""
                />
              </Grid>
              <Grid container xs={6} justifyContent="flex-end">
                <img
                  style={{ objectFit: "contain", maxWidth: "95%" }}
                  height="425px"
                  src={group[1]}
                  alt=""
                />
              </Grid>
            </>
          );
        })}
      </Grid>
    </Container>
  );
};

export default withStyles(styles)(Photography);
