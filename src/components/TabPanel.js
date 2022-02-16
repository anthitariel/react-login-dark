import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
//mport ChevronRightIcon from "@mui/icons-material/ChevronRight";
//import ExpandLessIcon from "@mui/icons-material/ExpandLess";

function LinkTab(props) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function TabPanel() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Typography paragraph>Components</Typography>
      <List>
        {[
          "Login",
          "Registation",
          "Forgot Password",
          "Verifcation",
          "Profile",
          "Settings",
          "Dashboard",
        ].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <InboxIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      <Typography paragraph>Components</Typography>
      <List>
        {["Buttons", "Checkbox", "Dropdown"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <InboxIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>

      <Tabs
        value={value}
        onChange={handleChange}
        orientation="vertical"
        sx={{ ml: 0 }}
      >
        <LinkTab
          label="Login"
          href="/SignIn"
          icon={<InboxIcon />}
          iconPosition="start"
        />
        <LinkTab
          label="Login"
          href="/SignIn"
          icon={<InboxIcon />}
          iconPosition="start"
        />
        <LinkTab
          label="Login"
          href="/SignIn"
          icon={<InboxIcon />}
          iconPosition="start"
        />
      </Tabs>
    </Box>
  );
}
