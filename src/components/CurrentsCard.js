import React from "react";
import { Card, CardContent, Grid } from "@mui/material";
import { withStyles } from "@mui/styles";

const styles = () => ({
  root: {
    padding: 20,
    borderRadius: 0,
    textAlign: "left",
  },
});

const CurrentsCard = ({ classes, currents }) => {
  return (
    <Card className={classes.root}>
      <CardContent>
        {currents.map(({ prompt, answer }, key) => (
          <>
            <br />
            <Grid container alignItems="end">
              <p className={classes.carouselCardHeader}>{prompt}...</p>
              <p style={{ marginLeft: 2, color: "#C1C1C1", fontSize: 14 }}>
                {answer}
              </p>
            </Grid>
          </>
        ))}
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(CurrentsCard);
