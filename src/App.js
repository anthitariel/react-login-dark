import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
//import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/CreateAccount";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
      light: "#42a5f5",
      dark: "#1565c0",
      contrastText: "#fff",
    },
    background: {
      default: "#2A2939",
      paper: "#3D3E4B",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CreateAccount />
    </ThemeProvider>
  );
};

export default App;
