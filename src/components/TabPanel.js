import React, { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { SubData } from "./SubData";
import { Link } from "react-router-dom";

function LinkTab(props) {
  return (
    <ListItem
      button
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
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <Box>
      <Typography paragraph>Pages</Typography>
      <Typography paragraph>Components</Typography>

      <List value={value} onChange={handleChange}>
        {SubData.map((item, index) => {
          return (
            <nav>
              <LinkTab key={index} onClick={item.subNav && showSubnav}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.title} />
                <ListItemIcon>
                  {item.subNav && subnav
                    ? item.iconOpened
                    : item.subNav
                    ? item.iconClosed
                    : null}
                </ListItemIcon>
              </LinkTab>
              <List>
                {subnav &&
                  item.subNav.map((item, index) => {
                    return (
                      <LinkTab>
                        <Link to={item.path} key={index}>
                          {item.title}
                        </Link>
                      </LinkTab>
                    );
                  })}
              </List>
            </nav>
          );
        })}
      </List>
    </Box>
  );
}
