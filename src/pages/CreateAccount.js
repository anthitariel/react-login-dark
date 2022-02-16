import * as React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { AppBar, Toolbar } from "@mui/material";
import logo from "../images/logo.png";
import CreateAccountForm from "../components/CreateAccountForm";

export default function CreateAccount() {
  return (
    <div>
      <AppBar sx={{ background: "#2A2939" }}>
        <Toolbar>
          <Link href="#" underline="none">
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
        <CreateAccountForm />
      </Box>
    </div>
  );
}
