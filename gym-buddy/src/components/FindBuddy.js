import {
  Box,
  Button,
  Card,
  FormControl,
  FormControlLabel,
  FormGroup,
  Grid,
  Input,
  InputLabel,
  makeStyles,
  MenuItem,
  Radio,
  RadioGroup,
  Select,
} from "@material-ui/core";
import Asynchronous from "./Asynchronous";
import cities from "../assets/cities.json";
import React from "react";

const useStyles = makeStyles((theme) => ({
  container: {
    // display: "flex",
    // justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    [theme.breakpoints.up("md")]: {
      flexDirection: "row",
    },
    padding: [theme.spacing(4)],
  },
  findButton: {
    height: "fit-content",
  },
  cardContainer: {
    width: "100%",
    padding: [theme.spacing(3)],
  },
}));
export function FindBuddy() {
  let i = 0;
  let ageList = [];
  while (++i <= 100) ageList.push(i);
  const [value, setValue] = React.useState("female");

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Box className="flexC" width="60%">
      <h1>Gym Buddy</h1>
      <Card className={classes.cardContainer}>
        <Grid container>
          <Grid container md={12}>
            <Grid md={6} xs={12} item>
              <FormControl>
                <Asynchronous
                  id="location"
                  className={classes.locationInput}
                  inputName={"location"}
                  list={cities}
                />
              </FormControl>
            </Grid>
            <Grid md={6} xs={12} item>
              <FormControl>
                <Asynchronous id="gymName" inputName={"gym name"} />
              </FormControl>
            </Grid>
          </Grid>
          <Grid xs={12} container>
            <FormControl className={classes.formControl}>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                onChange={handleAgeChange}
              >
                {ageList.map((item) => (
                  <MenuItem value={item}>{item}</MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid xs={12}>
            <RadioGroup
              aria-label="gender"
              name="gender1"
              value={value}
              onChange={handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </Grid>
          <Grid xs={12}>
            <Button
              type="submit"
              variant="outlined"
              color="primary"
              className={classes.findButton}
            >
              Find
            </Button>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );
}
