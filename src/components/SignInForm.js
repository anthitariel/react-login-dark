import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormGroup from "@mui/material/FormGroup";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import InputLabel from "@mui/material/InputLabel";
import Paper from "@mui/material/Paper";
import { Link as RouterLink } from "react-router-dom";

export default function SignInForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" sx={{ width: "80%" }}>
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#3D3D4B",
          borderRadius: 5,
          p: 5,
        }}
      >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <DialogContent minwidth="xs">
            <DialogTitle sx={{ fontSize: "h3.fontSize", p: 0 }}>
              Sign In
            </DialogTitle>
            <DialogContentText sx={{ mb: 5, fontSize: "h5.fontSize" }}>
              Login to manage your account
            </DialogContentText>
            <InputLabel
              sx={{
                fontSize: "h6.fontSize",
                fontWeight: "bold",
              }}
            >
              Username
            </InputLabel>
            <TextField
              margin="normal"
              id="username"
              label="Username"
              type="username"
              variant="outlined"
              fullWidth
            />
            <InputLabel
              sx={{
                mt: 2,
                fontSize: "h6.fontSize",
                fontWeight: "bold",
              }}
            >
              Password
            </InputLabel>
            <TextField
              margin="normal"
              id="password"
              label="Password"
              type="password"
              fullWidth
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="start">
                    <VisibilityOffIcon />
                  </InputAdornment>
                ),
              }}
            />
            <FormGroup sx={{ mb: 2 }}>
              <FormControlLabel control={<Checkbox />} label="Remember me" />
            </FormGroup>

            <Button
              component={RouterLink}
              to="/CreateAccount"
              type="submit"
              variant="contained"
              size="medium"
              fullWidth
              sx={{
                mt: 3,
                mb: 2,
                fontSize: 20,
                p: 1.5,
                textTransform: "capitalize",
              }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs sx={{ textAlign: "center", mb: 10 }}>
                <Link
                  href="#"
                  underline="none"
                  sx={{
                    color: "#5790FF",
                    fontSize: "h6.fontSize",
                    fontWeight: "bold",
                  }}
                >
                  Forgot password?
                </Link>
              </Grid>
            </Grid>
          </DialogContent>
        </Box>
      </Paper>
    </Container>
  );
}
