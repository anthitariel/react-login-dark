import * as React from "react";
import SignInForm from "../components/SignInForm";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";
import { Paper } from "@mui/material";
import { Grid } from "@mui/material";

export default function SignIn() {
  return (
    <Paper
      style={{
        background: "linear-gradient(to right bottom, #111, #363744, #464553)",
        minHeight: "100vh",
      }}
    >
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item component="form" xs={6}>
          <SignInForm />
        </Grid>
      </Grid>
    </Paper>
  );
}
