import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import CreateAccount from "./pages/CreateAccount";
import BrowseTemplates from "./pages/BrowseTemplates";

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

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignIn" element={<SignIn />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/BrowseTemplates" element={<BrowseTemplates />} />
        <Route
          path="*"
          element={
            <h1 style={{ textAlign: "center" }}>404 Error - Page Not Found</h1>
          }
        />
      </Routes>
    </ThemeProvider>
  );
}
