import * as React from "react";
import Box from "@mui/material/Box";
import logo from "../images/logo.png";
import CreateAccountForm from "../components/CreateAccountForm";
import { Link } from "react-router-dom";

export default function CreateAccount() {
  return (
    <div>
      <Link to="/">
        <img src={logo} alt="logo" />
      </Link>

      <Box
        component="form"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 2,
          background:
            "linear-gradient(to right bottom, #111, #363744, #464553)",
          minHeight: "100vh",
        }}
      >
        <CreateAccountForm />
      </Box>
      <Link to="/">dfdgf</Link>
    </div>
  );
}
