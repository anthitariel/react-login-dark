import * as React from "react";
import Box from "@mui/material/Box";
import SignInForm from "../components/SignInForm";

import { AppBar, Toolbar } from "@mui/material";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

export default function SignIn() {
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
        <SignInForm />
      </Box>
    </div>
  );
}
