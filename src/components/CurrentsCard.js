import React from "react";
import { Card, CardContent, Grid } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = () => ({
  root: {
    padding: 20,
    borderRadius: 0,
    textAlign: "left",
  },
  media: {
    height: 275,
  },
});

const CurrentsCard = ({ classes }) => {
  return (
    <Card className={classes.root}>
      <CardContent style={{ fontFamily: "Inter" }}>
        <Grid container alignItems="end">
          <p className={classes.text}>🎧 Listening to...</p>
          <p style={{ marginLeft: 2, color: "#C1C1C1" }}>keshi!!! 🎤</p>
        </Grid>
        <br />
        <Grid container alignItems="end">
          <p className={classes.text}>📖 Reading...</p>
          <p style={{ marginLeft: 2, color: "#C1C1C1" }}>
            North of Normal - Cea Sunrise Pearson ❄️
          </p>
        </Grid>
        <br />
        <Grid container alignItems="end">
          <p className={classes.text}>🎬 Watching...</p>
          <p style={{ marginLeft: 2, color: "#C1C1C1" }}>Arcane 🪄</p>
        </Grid>
        <br />
        <Grid container alignItems="end">
          <p className={classes.text}>😋 Eating...</p>
          <p style={{ marginLeft: 2, color: "#C1C1C1" }}>hot pot 🍲</p>
        </Grid>
        <br />
        <Grid container alignItems="end">
          <p className={classes.text}>⌛ Busy...</p>
          <p style={{ marginLeft: 2, color: "#C1C1C1" }}>
            expanding my arsenal of dance moves 🕺
          </p>
        </Grid>
        <br />
        <Grid container alignItems="end">
          <p className={classes.text}>😍 Obsessed with...</p>
          <p style={{ marginLeft: 2, color: "#C1C1C1" }}>nail art 💅</p>
        </Grid>
        <br />
        <Grid container alignItems="end">
          <p className={classes.text}>💭 Dreaming of...</p>
          <p style={{ marginLeft: 2, color: "#C1C1C1" }}>in-person uni 😔</p>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(CurrentsCard);
