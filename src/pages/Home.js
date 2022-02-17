import * as React from "react";
import Box from "@mui/material/Box";
import { AppBar, Toolbar } from "@mui/material";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { List, Button } from "@mui/material";

export default function Home() {
  return (
    <div>
      <AppBar sx={{ background: "#2A2939" }}>
        <Toolbar>
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
        </Toolbar>
      </AppBar>

      <Box
        component="form"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(to right bottom, #111, #363744, #464553)",
          minHeight: "100vh",
        }}
      >
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Button
            href="/"
            variant="contained"
            sx={{ p: 0.5, m: 2, fontSize: "h6.fontSize" }}
          >
            Home page
          </Button>
          <Button
            href="/SignIn"
            variant="contained"
            sx={{ p: 0.5, m: 2, fontSize: "h6.fontSize" }}
          >
            Page 1.1 "Sign In"
          </Button>
          <Button
            href="/CreateAccount"
            variant="contained"
            sx={{ p: 0.5, m: 2, fontSize: "h6.fontSize" }}
          >
            Page 1.2 "Create an Account"
          </Button>
          <Button
            href="/BrowseTemplates"
            variant="contained"
            sx={{ p: 0.5, m: 2, fontSize: "h6.fontSize" }}
          >
            Page 2 "Browse Templates"
          </Button>
        </List>
      </Box>
    </div>
  );
}
