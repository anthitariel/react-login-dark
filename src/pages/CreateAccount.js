import * as React from "react";
import logo from "../images/logo.png";
import CreateAccountForm from "../components/CreateAccountForm";
import { Link } from "react-router-dom";
import { Paper, Grid } from "@mui/material";

export default function CreateAccount() {
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
          <CreateAccountForm />
        </Grid>
      </Grid>
    </Paper>
  );
}
