import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";
import Profile from "../components/Profile";
import ActivityCard from "../components/ActivityCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay, Mousewheel } from "swiper";
import sanityClient from "../client.js";
import CurrentsCard from "../components/CurrentsCard";
import NoteCard from "../components/NoteCard";

SwiperCore.use([Autoplay, Mousewheel]);

const styles = (theme) => ({
  imagesContainer: {
    minHeight: 615,
    maxHeight: 1100,
    marginBottom: 50,
  },

  leftImageContainer: {
    position: "relative",
    width: "500px",
    marginTop: 50,
    marginRight: 100,
  },

  leftRect: {
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
  },

  leftImage: {
    display: "block",
    width: "335px",
    marginTop: "-445px",
    marginLeft: "115px",
    opacity: "85%",
    border: "25px solid white",
    filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25))",
    transform: "rotate(-13.1deg)",
    transition: "ease-out 0.2s",
    "&:hover": {
      transform: "rotate(-9.1deg)",
      transition: "ease-out 0.2s",
    },
  },

  leftPaperclip: {
    position: "absolute",
    top: 0,
    right: 75,
    height: "166px",
  },

  rightImageContainer: {
    position: "relative",
    width: "500px",
    marginTop: 50,
    marginLeft: 100,
  },

  rightRect: {
    display: "block",
    width: "425px",
    height: "500px",
  },

  rightImage: {
    display: "block",
    width: "335px",
    marginTop: "-490px",
    opacity: "85%",
    border: "25px solid white",
    filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.25))",
    transform: "rotate(4.37deg)",
    transition: "ease-out 0.2s",
    "&:hover": {
      transform: "rotate(0.37deg)",
      transition: "ease-out 0.2s",
    },
  },

  rightPaperclip: {
    position: "absolute",
    top: -40,
    right: 115,
    height: "146px",
  },

  introText: {
    width: 500,
    position: "relative",
    textAlign: "left",
    lineHeight: "30px"
  },

  header: {
    fontFamily: "Newsreader",
    fontSize: 30,
  },

  profiles: {
    margin: "200px 0 200px 0",
    height: "532px",
    position: "relative",
  },

  textL: {
    width: 501,
    textAlign: "left",
    lineHeight: "30px",
  },

  profileImageR: {
    width: "335px",
    height: "475px",
    border: "25px solid white",
    filter: "drop-shadow(0px 4px 10px rgba(0, 0, 0, 0.1))",
    transform: "matrix(0.98, 0.18, -0.18, 0.98, 0, 0)",
    position: "relative",
    zIndex: 2,
  },

  tapeRTL: {
    position: "absolute",
    top: -100,
    left: -10,
    width: "35%",
    height: "35%",
    zIndex: 2,
    filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.20))",
  },

  tapeRBR: {
    position: "absolute",
    bottom: -92,
    right: 0,
    width: "35%",
    height: "35%",
    zIndex: 2,
    filter: "drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.20))",
  },

  imgContainer: {
    position: "relative",
  },

  brushStroke1: {
    position: "absolute",
    top: -80,
    left: -275,
    height: "250%",
    width: "200%",
    zIndex: -1,
  },

  profileSwiper: {
    height: "100%",
    width: "100%",
    position: "absolute",
    bottom: 26,
  },

  carouselHeader: {
    marginBottom: 150,
    width: 600,
  },

  carousel: { position: "relative", marginBottom: 15 },

  brushStroke2: {
    width: "100%",
    height: "300%",
    position: "absolute",
    bottom: -40,
    left: 10,
    zIndex: -1,
  },

  carouselSwiper: {
    "--swiper-navigation-color": theme.palette.secondary.main,
    minHeight: 500,
  },

  carouselSwiperSlide: {
    padding: "0 50px 0 50px",
  },

  carouselWire: {
    width: "100%",
    position: "absolute",
    top: "-20%",
    left: 0,
    zIndex: 1,
  },

  carouselCardHeader: {
    fontSize: 14,
    fontWeight: 600,
  },
});

const Home = ({ classes }) => {
  // const [profiles, setProfiles] = useState([]);
  const [carouselSlides, setCarouselSlides] = useState([]);

  useEffect(() => {
    // sanityClient
    //   .fetch(`*[_type == "profile"]`)
    //   .then((data) => {
    //     setProfiles(data);
    //   })
    //   .catch(console.error);

    sanityClient
      .fetch(`*[_type == "activity" || _type == "note"]`)
      .then((data) => {
        setCarouselSlides(
          data.sort((a, b) => new Date(b._createdAt) - new Date(a._createdAt))
        );
      })
      .catch(console.error);
  }, []);

  return (
    <>
      <Grid
        className={classes.imagesContainer}
        container
        xs={12}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <div className={classes.leftImageContainer}>
            <img
              className={classes.leftRect}
              src="/graphics/Rectangle.svg"
              alt="Rectangle"
            />
            <img
              className={classes.leftImage}
              src="/images/Portrait1.jpg"
              alt="Portrait1"
            />
            <img
              className={classes.leftPaperclip}
              src="/graphics/PaperclipL.svg"
              alt="Paperclip"
            />
          </div>
        </Grid>
        <Grid item>
          <div className={classes.rightImageContainer}>
            <img
              className={classes.rightRect}
              src="/graphics/Rectangle.svg"
              alt="Rectangle"
            />
            <img
              className={classes.rightImage}
              src="/images/Portrait2.jpg"
              alt="Portrait2"
            />
            <img
              className={classes.rightPaperclip}
              src="/graphics/PaperclipR.svg"
              alt="Paperclip"
            />
          </div>
        </Grid>
      </Grid>
      <Grid container justifyContent="center">
        <div className={classes.introText}>
          <img
            className={classes.brushStroke1}
            src="/graphics/BrushStroke1.png"
            alt="Brush Stroke"
          />
          <Grid container justifyContent="center" alignItems="center" spacing={5}>
            <Grid item className={classes.header}>
            👋 Hey
            </Grid>
            <Grid item >
            Welcome to my creative outlet! <br />
            I'm an engineering student dedicated to creating <br/> product-driven solutions to human problems and 
            <br/> making people happy :)
            </Grid>
           
          </Grid>
        </div>
      </Grid>
      {/* <Grid className={classes.profiles}>
        <Grid container justifyContent="center">
          <Grid container xs={5} justifyContent="center"></Grid>
          <Grid xs={5} container justifyContent="center" alignItems="center">
            <div className={classes.imgContainer}>
              <div className={classes.profileImageR} />
              <img
                className={classes.tapeRTL}
                src="/graphics/Tape.svg"
                alt="Tape"
              />
              <img
                className={classes.tapeRBR}
                src="/graphics/Tape.svg"
                alt="Tape"
              />
            </div>
          </Grid>
        </Grid>
        <Swiper
          className={classes.profileSwiper}
          direction={"vertical"}
          slidesPerView={1}
          speed={500}
          mousewheel={{ forceToAxis: true, releaseOnEdges: true }}
          noSwiping={true}
          touchRatio={0}
          autoplay={{
            delay: 10000,
            disableOnInteraction: false,
          }}
        >
          {profiles.map((profile, key) => (
            <SwiperSlide>
              <Profile classes={classes} profile={profile} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Grid> */}
      <Grid container justifyContent="center" style={{paddingTop: "75px"}}>
        <div className={classes.carouselHeader}>
        <Grid container justifyContent="center" style={{ padding: 100 }}>
        <img src="/graphics/Paintbrush.svg" />
      </Grid>
          <p className={classes.header}>Hot off the press 🍵</p>
        </div>
      </Grid>
      <Grid className={classes.carousel}>
        <Swiper
          className={classes.carouselSwiper}
          slidesPerView={3}
          navigation={false}
          grabCursor={true}
        >
          {carouselSlides.map((slide, key) => (
            <SwiperSlide className={classes.carouselSwiperSlide}>
              {slide._type === "activity" ? (
                <ActivityCard classes={classes} activity={slide} />
              ) : (
                <NoteCard classes={classes} note={slide} />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
        <img
          className={classes.carouselWire}
          src="/graphics/Carousel.svg"
          alt="Carousel"
        />
      </Grid>
    </>
  );
};

export default withStyles(styles)(Home);
