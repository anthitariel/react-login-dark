import * as React from "react";
import Box from "@mui/material/Box";
import { List, Button } from "@mui/material";

export default function Home() {
  return (
    <div>
      <Box
        component="form"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
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
