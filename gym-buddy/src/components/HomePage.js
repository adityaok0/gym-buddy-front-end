import {
  Box,
  Button,
  Card,
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  makeStyles,
  Tab,
  Tabs,
  Typography,
} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router";
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  gymBuddy: {
    margin: 0,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },
  loginContainer: {},
});
export function HomePage() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function a11yProps(index) {
    return {
      id: `scrollable-prevent-tab-${index}`,
      "aria-controls": `scrollable-prevent-tabpanel-${index}`,
    };
  }
  const history = useHistory();
  const redirectToDashboard = () => {
    history.push("home");
  };
  function loginCheck() {
    redirectToDashboard();
  }
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`scrollable-prevent-tabpanel-${index}`}
        aria-labelledby={`scrollable-prevent-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  function SignUpBox() {
    return (
      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="email_login">Email</InputLabel>
          <Input id="email_login" type="text" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password_login">Password</InputLabel>
          <Input id="password_login" type="password" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="confirm_password_login">
            Confirm Password
          </InputLabel>
          <Input id="confirm_password_login" type="password" />
        </FormControl>
        <Box pt={4}>
          <Button type="submit" variant="contained" color="primary">
            Sign Up
          </Button>
        </Box>
      </FormGroup>
    );
  }
  function LoginBox() {
    return (
      <FormGroup>
        <FormControl>
          <InputLabel htmlFor="email_sign_up">Email</InputLabel>
          <Input id="email_sign_up" type="text" />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="password_sign_up">Password</InputLabel>
          <Input id="password_sign_up" type="password" />
        </FormControl>
        <Box pt={4}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={loginCheck}
          >
            Login
          </Button>
        </Box>
      </FormGroup>
    );
  }
  return (
    <Box className="HomePage" maxWidth="xl" height="100%">
      <Box className="header_gymBuddy">
        <Box py={1}>
          <h1 className={`gymBuddy ${classes.gymBuddy}`}>Gym Buddy</h1>
        </Box>
      </Box>
      <Box className="d-flex flex-column align-items-center loginBody">
        <Box className={classes.loginContainer}>
          <h2>Welcome</h2>
          <Box className={classes.container}>
            <Card className={classes.root} width="25%">
              <Tabs
                value={value}
                indicatorColor="primary"
                textColor="primary"
                onChange={handleChange}
                aria-label="disabled tabs example "
              >
                <Tab label="Signup" aria-label={a11yProps(0)} />
                <Tab label="Login" aria-label={a11yProps(1)} />
              </Tabs>
              <TabPanel value={value} index={0}>
                <SignUpBox />
              </TabPanel>
              <TabPanel value={value} index={1}>
                <LoginBox />
              </TabPanel>
            </Card>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
