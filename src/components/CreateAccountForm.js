import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
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
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Link as RouterLink } from "react-router-dom";

export default function CreateAccountForm() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });
  };

  return (
    <Container component="main" maxWidth="lg">
      <Paper
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#3D3D4B",
          borderRadius: 5,
          mt: 3,
          p: 1,
        }}
        maxWidth="xs"
      >
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <DialogContent>
            <DialogTitle sx={{ fontSize: "h3.fontSize", p: 0 }}>
              Create an account
            </DialogTitle>
            <DialogContentText sx={{ mb: 5, fontSize: "h5.fontSize" }}>
              Sign Up to manage your account
            </DialogContentText>
            <InputLabel
              sx={{
                mt: 2,
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
              Email
            </InputLabel>
            <TextField
              margin="normal"
              id="email"
              label="Email"
              type="email"
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
              Select Timezone
            </InputLabel>
            <FormControl
              margin="normal"
              fullWidth
              sx={{
                mt: 2,
                fontSize: "h6.fontSize",
                fontWeight: "bold",
              }}
            >
              <InputLabel id="select-timezone">Select Timezone</InputLabel>
              <Select
                labelId="timezone"
                id="select-timezone"
                label="Europe / Kyiv"
              >
                <MenuItem>Europe / Kyiv (GTM 2)</MenuItem>
                <MenuItem>Europe / Kyiv (GTM 2)</MenuItem>
                <MenuItem>Europe / Kyiv (GTM 2)</MenuItem>
              </Select>
            </FormControl>

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
            <InputLabel
              sx={{
                mt: 2,
                fontSize: "h6.fontSize",
                fontWeight: "bold",
              }}
            >
              Confirm Password
            </InputLabel>
            <TextField
              margin="normal"
              id="confirm-password"
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
              <FormControlLabel
                control={<Checkbox />}
                label="I agree to Terms and Privacy Policy"
              />
            </FormGroup>

            <Button
              component={RouterLink}
              to="/BrowseTemplates"
              type="submit"
              variant="contained"
              size="medium"
              fullWidth
              sx={{
                mt: 3,
                mb: 3,
                fontSize: 20,
                p: 1.5,
                textTransform: "capitalize",
              }}
            >
              Create an account
            </Button>
            <Grid container>
              <Grid item xs sx={{ textAlign: "center" }}></Grid>
            </Grid>
          </DialogContent>
        </Box>
      </Paper>
    </Container>
  );
}
