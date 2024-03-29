import React from "react";
import { withStyles } from "@mui/styles";
import tabs from "../collections/tabs";

const styles = (theme) => ({
  navContainer: {
    background: "white",
    height: "72px",
    borderBottom: `2px solid ${theme.palette.primary.main}`,
  },

  nav: {
    position: "relative",
    height: "72px",
    width: "100%",
  },

  navLogo: {
    position: "absolute",
    left: "35px",
    margin: "15px",
    fontFamily: "Newsreader",
    fontSize: 40,
    textDecoration: "none",
    color: theme.palette.primary.contrastText
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
    backgroundImage: "url(/graphics/FolderTab.svg)",
    backgroundPosition: "50% 0%",
    backgroundSize: "175px",
    textAlign: "center",
    textDecoration: "none",
    color: theme.palette.primary.main,
    lineHeight: "50px",
    fontFamily: "Newsreader",
    transition: "ease-out 0.2s",
    "&:hover": {
      marginTop: "15px",
      height: "55px",
      transition: "ease-out 0.2s",
    },
  },

  navItemsSelected: {
    listStyle: "none",
    width: "163px",
    height: "55px",
    marginTop: "15px",
    backgroundImage: "url(/graphics/FolderTab.svg)",
    backgroundPosition: "50% 0%",
    backgroundSize: "175px",
    textAlign: "center",
    textDecoration: "none",
    color: theme.palette.primary.main,
    lineHeight: "50px",
    fontFamily: "Newsreader",
  },
});

const NavBar = ({ classes }) => {
  return (
    <div className={classes.navContainer}>
      <nav className={classes.nav}>
        <a href="/" className={classes.navLogo}>
          Cng
        </a>

        <ul className={classes.navUl}>
          {tabs.map((tab) => (
            <a
              className={
                window.location.pathname.includes(tab.url)
                  ? classes.navItemsSelected
                  : classes.navItems
              }
              href={tab.url}
              target={tab.name === "Resume" ? "_blank" : ""}
              rel="noreferrer"
            >
              <li>{tab.name}</li>
            </a>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default withStyles(styles)(NavBar);
