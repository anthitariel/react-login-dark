import * as React from "react";
import Box from "@mui/material/Box";
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
      <SignInForm />
    </Box>
  );
}
