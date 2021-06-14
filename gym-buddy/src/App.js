import {
  Box,
  createMuiTheme,
  CssBaseline,
  ThemeProvider,
} from "@material-ui/core";
import { green, red } from "@material-ui/core/colors";
import "./App.css";
import { HomePage } from "./components/HomePage";
import { Navigator } from "./components/Navigator";

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: red,
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box className="App">
        <Navigator />
      </Box>
    </ThemeProvider>
  );
}

export default App;
