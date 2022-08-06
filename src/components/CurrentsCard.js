import React from "react";
import { Grid } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = () => ({
  root: {
    backgroundImage: "url(/graphics/LinedPaper.svg)",
    backgroundSize: "cover",
    padding: 20,
    borderRadius: 0,
    textAlign: "left",
    filter: "drop-shadow(10px 15px 5px rgba(0, 0, 0, 0.20))",
  },
});

const CurrentsCard = ({ classes, currents }) => {
  return (
    <Grid className={classes.root}>
      {currents.map(({ prompt, answer }, key) => (
        <>
          <br />
          <Grid container alignItems="end" style={{ lineHeight: "30px" }}>
            <p className={classes.carouselCardHeader}>{prompt}...</p>
            <p style={{ marginLeft: 5, fontSize: 14 }}>{answer}</p>
          </Grid>
        </>
      ))}
    </Grid>
  );
};

export default withStyles(styles)(CurrentsCard);
