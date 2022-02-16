import * as React from "react";
import Box from "@mui/material/Box";
import { AppBar, Toolbar } from "@mui/material";
import logo from "../images/logo.png";
import List from "@mui/material/List";
import { Link } from "react-router-dom";

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
          /*   background: "linear-gradient(to left top, #252436, #363744, #464553)", */
          minHeight: "100vh",
        }}
      >
        <List
          sx={{
            display: "flex",
            flexDirection: "column",
            fontSize: "h5.fontSize",
          }}
        >
          <Link underline="none" to="/SignIn">
            Page 1.1 "Sign In"
          </Link>
          <Link to="/CreateAccount">Page 1.2 "Create an Account"</Link>
          <Link to="/BrowseTemplates">Page 2 "Browse Templates"</Link>
        </List>
      </Box>
    </div>
  );
}
