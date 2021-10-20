import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";
import Profile from "../components/Profile";
import ActivityCard from "../components/ActivityCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay, Mousewheel } from "swiper";
import sanityClient from "../client.js";

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
    opacity: "75%",
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
    opacity: "75%",
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
    width: 525,
    position: "relative",
  },

  header: { fontSize: 50 },

  text: { fontSize: 20 },

  profiles: {
    margin: "200px 0 200px 0",
    height: "532px",
    position: "relative",
  },

  textL: {
    width: 500,
    textAlign: "left",
    fontSize: 20,
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
  },

  tapeRBR: {
    position: "absolute",
    bottom: -92,
    right: 0,
    width: "35%",
    height: "35%",
    zIndex: 2,
  },

  imgContainer: {
    position: "relative",
  },

  iAm: {
    opacity: 0.3,
    textShadow: "0px 2px 2px rgba(0, 0, 0, 0.5)",
  },

  brushStroke1: {
    position: "absolute",
    top: -55,
    left: -275,
    height: "160%",
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
    marginBottom: 100,
    position: "relative",
    width: 600,
  },

  carousel: { position: "relative", marginBottom: 100 },

  brushStroke2: {
    width: "150%",
    height: "175%",
    position: "absolute",
    bottom: -25,
    left: -125,
    zIndex: -1,
  },

  carouselSwiper: {
    "--swiper-navigation-color": theme.palette.secondary.main,
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
});

const Home = ({ classes }) => {
  const [profiles, setProfiles] = useState([]);

  useEffect(() => {
    sanityClient
      .fetch(`*[_type == "profile"]`)
      .then((data) => {
        setProfiles(data);
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
              src="/images/Headshot.jpg"
              alt="Headshot"
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
              src="/images/Portrait.jpg"
              alt="Portrait"
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
          <p className={classes.header}>Hey there 👋</p>
          <br />
          <p className={classes.text}>
            Welcome to my creative outlet! <br />
            <br />
            This is where I share little snippets of my life through my
            projects, photography, and journal.
            <br />
            <br /> Scroll to get to know me :)
          </p>
        </div>
      </Grid>
      <Grid className={classes.profiles}>
        <Grid container justifyContent="center">
          <Grid container xs={5} justifyContent="center">
            <div className={classes.textL}>
              <p className={classes.iAm}>
                <br />
                <br />
                <br />
                <br />I am...
              </p>
            </div>
          </Grid>
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
      </Grid>
      <Grid container justifyContent="center">
        <div className={classes.carouselHeader}>
          <p className={classes.header}>What I've Been Up To ☕</p>
          <img
            className={classes.brushStroke2}
            src="/graphics/BrushStroke2.png"
            alt="Brush Stroke"
          />
        </div>
      </Grid>
      <Grid className={classes.carousel}>
        <Swiper
          className={classes.carouselSwiper}
          slidesPerView={3}
          navigation={true}
          grabCursor={true}
        >
          <SwiperSlide className={classes.carouselSwiperSlide}>
            <ActivityCard classes={classes} />
          </SwiperSlide>
          <SwiperSlide className={classes.carouselSwiperSlide}>
            <ActivityCard classes={classes} />
          </SwiperSlide>
          <SwiperSlide className={classes.carouselSwiperSlide}>
            <ActivityCard classes={classes} />
          </SwiperSlide>
          <SwiperSlide className={classes.carouselSwiperSlide}>
            <ActivityCard classes={classes} />
          </SwiperSlide>
          <SwiperSlide className={classes.carouselSwiperSlide}>
            <ActivityCard classes={classes} />
          </SwiperSlide>
          <SwiperSlide className={classes.carouselSwiperSlide}>
            <ActivityCard classes={classes} />
          </SwiperSlide>
          <SwiperSlide className={classes.carouselSwiperSlide}>
            <ActivityCard classes={classes} />
          </SwiperSlide>
          <SwiperSlide className={classes.carouselSwiperSlide}>
            <ActivityCard classes={classes} />
          </SwiperSlide>
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
