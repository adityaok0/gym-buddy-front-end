import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { FindBuddy } from "./FindBuddy";
import { NoBuddies } from "./NoBuddies";
const useStyles = makeStyles({
  root: { height: "100%", width: "100%" },
  root2: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});
export function Dashboard() {
  const classes = useStyles();

  const [buddyFound, setBuddyFound] = React.useState(false);
  const startFindingBuddies = () => {
    setBuddyFound(true);
  };

  return (
    <Box
      height="100%"
      width="100%"
      bgcolor="primary.main"
      color="white"
      fontSize={40}
    >
      <Grid className={classes.root2}>
        {buddyFound && <FindBuddy />}
        {!buddyFound && <NoBuddies onClickHandler={startFindingBuddies} />}
      </Grid>
    </Box>
  );
}
