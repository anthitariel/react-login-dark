import * as React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { AppBar, Toolbar } from "@mui/material";
import logo from "../images/logo.png";
import SignInForm from "../components/SignInForm";

export default function SignIn() {
  return (
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
      <AppBar sx={{ background: "#2A2939" }}>
        <Toolbar>
          <Link href="#" underline="none">
            <img src={logo} alt="logo" />
          </Link>
        </Toolbar>
      </AppBar>

      <SignInForm />
    </Box>
  );
}
