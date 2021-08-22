import React from "react";
import { withStyles } from "@material-ui/core";
import FolderTab from "../graphics/FolderTab.svg";

const styles = () => ({
  navContainer: {
    background: "white",
    height: "72px",
    borderBottom: "2px solid #d8c7b5",
  },

  nav: {
    position: "relative",
    height: "72px",
    width: "100%",
  },

  navLogo: {
    position: "absolute",
    left: "50px",
    top: "20px",
    fontWeight: "normal",
    fontSize: "24px",
    textAlign: "center",
    textDecoration: "none",
    color: "rgba(0, 0, 0, 0.72)",
    transition: "ease-out 0.2s",
    "&:hover": {
      textShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
      transition: "ease-out 0.2s",
    },
  },

  navUl: {
    position: "absolute",
    right: 0,
    display: "flex",
  },

  navItems: {
    listStyle: "none",
    width: "163px",
    height: "45px",
    marginTop: "25px",
    backgroundImage: `url(${FolderTab})`,
    backgroundPosition: "50% 0%",
    backgroundSize: "175px",
    textAlign: "center",
    textDecoration: "none",
    color: "#d8c7b5",
    fontSize: "14px",
    lineHeight: "50px",
    transition: "ease-out 0.2s",
    "&:hover": {
      marginTop: "15px",
      height: "55px",
      transition: "ease-out 0.2s",
    },
  },
});

const NavBar = ({ classes }) => {
  return (
    <div className={classes.navContainer}>
      <nav className={classes.nav}>
        <a href="/" className={classes.navLogo}>
          Christine Ng
        </a>

        <ul className={classes.navUl}>
          <a className={classes.navItems} href="/">
            <li>Resume</li>
          </a>
          <a className={classes.navItems} href="./projects">
            <li>Projects</li>
          </a>
          <a className={classes.navItems} href="./photography">
            <li>Photography</li>
          </a>
          <a className={classes.navItems} href="./journal">
            <li>Journal</li>
          </a>
        </ul>
      </nav>
    </div>
  );
};

export default withStyles(styles)(NavBar);
