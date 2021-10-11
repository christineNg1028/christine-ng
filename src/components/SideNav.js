import React from "react";
import { Stack } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = () => ({
  sideNav: {
    position: "sticky",
    width: 160,
    zIndex: 1,
    top: 0,
    left: 0,
    paddingTop: 50,
    fontSize: "14px",
  },
  washi1: {
    cursor: "pointer",
    backgroundImage: "url(/graphics/Washi1.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "70px",
    textDecoration: "none",
    color: "black",
    padding: "20px 40px 20px 20px",
    "&:hover": {
      backgroundImage: "url(/graphics/Washi1Ext.svg)",
      width: 180,
    },
  },
  washi1Ext: {
    cursor: "pointer",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "70px",
    textDecoration: "none",
    color: "black",
    padding: "20px 40px 20px 20px",
    backgroundImage: "url(/graphics/Washi1Ext.svg)",
    width: 180,
  },
  washi2: {
    cursor: "pointer",
    backgroundImage: "url(/graphics/Washi2.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "70px",
    textDecoration: "none",
    color: "black",
    padding: "20px 40px 20px 20px",
    "&:hover": {
      backgroundImage: "url(/graphics/Washi2Ext.svg)",
      width: 180,
    },
  },
  washi2Ext: {
    cursor: "pointer",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "70px",
    textDecoration: "none",
    color: "black",
    padding: "20px 40px 20px 20px",
    backgroundImage: "url(/graphics/Washi2Ext.svg)",
    width: 180,
  },
  washi3: {
    cursor: "pointer",
    backgroundImage: "url(/graphics/Washi3.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "70px",
    textDecoration: "none",
    color: "black",
    padding: "20px 40px 20px 20px",
    "&:hover": {
      backgroundImage: "url(/graphics/Washi3Ext.svg)",
      width: 180,
    },
  },
  washi3Ext: {
    cursor: "pointer",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "70px",
    textDecoration: "none",
    color: "black",
    padding: "20px 40px 20px 20px",
    backgroundImage: "url(/graphics/Washi3Ext.svg)",
    width: 180,
  },
});

const SideNav = ({ classes, tabs, currentTab, onTabClick }) => {
  return (
    <Stack spacing={1} className={classes.sideNav}>
      {tabs.map((tab, i) =>
        currentTab === i ? (
          <span
            className={
              i === 0
                ? classes.washi1Ext
                : i === 1
                ? classes.washi2Ext
                : classes.washi3Ext
            }
          >
            <p
              style={{
                backgroundColor: "#fff",
                borderRadius: 4,
                padding: 2,
                color: "#d8c7b5",
              }}
            >
              {tab.name}
            </p>
          </span>
        ) : (
          <span
            className={
              i === 0
                ? classes.washi1
                : i === 1
                ? classes.washi2
                : classes.washi3
            }
            onClick={() => onTabClick(i)}
          >
            <p
              style={{
                backgroundColor: "#fff",
                borderRadius: 4,
                padding: 2,
                color: "#d8c7b5",
              }}
            >
              {tab.name}
            </p>
          </span>
        )
      )}
    </Stack>
  );
};

export default withStyles(styles)(SideNav);
