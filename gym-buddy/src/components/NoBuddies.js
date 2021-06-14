import { Box, Button, Grid, makeStyles } from "@material-ui/core";

export const NoBuddies = ({ onClickHandler }) => {
  return (
    <Box color="white">
      <p>You currently don't have any buddy.</p>
      <Button variant="contained" onClick={onClickHandler}>
        Start finding here
      </Button>
    </Box>
  );
};
