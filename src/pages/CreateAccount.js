import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import InputAdornment from "@mui/material/InputAdornment";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import { AppBar, Toolbar } from "@mui/material";
import logo from "../images/logo.png";

export default function CreateAccount() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box
      component="form"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(to left top, #252436, #363744, #464553)",
        minHeight: "100vh",
      }}
    >
      <Button
        variant="contained"
        onClick={handleClickOpen}
        size="medium"
        sx={{
          fontSize: 20,
          textTransform: "capitalize",
        }}
      >
        Sign In (Page 1)
      </Button>
      <AppBar sx={{ background: "#2A2939" }}>
        <Toolbar>
          <Link href="#" underline="none">
            <img src={logo} alt="logo" />
          </Link>
        </Toolbar>
      </AppBar>

      <Dialog fullWidth="lg" maxWidth="sm" open={open} onClose={handleClose}>
        <DialogContent sx={{ p: 10 }}>
          <DialogTitle sx={{ fontSize: "h3.fontSize", p: 0 }}>
            Create an Account
          </DialogTitle>
          <DialogContentText sx={{ mb: 5, fontSize: "h5.fontSize" }}>
            Sign up to manage your account
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
            Email
          </InputLabel>
          <TextField
            margin="normal"
            id="email"
            label="Email"
            type="email"
            fullWidth
            variant="outlined"
          />
          <TextField
            margin="normal"
            id="email"
            label="Email"
            type="email"
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
          <TextField
            margin="normal"
            id="email"
            label="Email"
            type="email"
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
            variant="contained"
            size="medium"
            fullWidth
            onClick={handleClose}
            sx={{
              mt: 2,
              fontSize: 20,
              p: 1.5,
              textTransform: "capitalize",
            }}
          >
            Sign In
          </Button>
          <DialogContentText sx={{ mt: 3, textAlign: "center" }}>
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
          </DialogContentText>
        </DialogContent>
      </Dialog>
    </Box>
  );
}
