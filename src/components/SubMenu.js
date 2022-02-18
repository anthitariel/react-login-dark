/* import React, { useState } from "react";
import { List, ListItem } from "@mui/material";
import { SubData } from "./SubData";
import { ListItemIcon, ListItemText } from "@mui/material";

export default function SubMenu() {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);

  return (
    <nav>
      {SubData.map((item, index) => {
        return (
          <List>
            <ListItem button key={index} onClick={item.subNav && showSubnav}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.title} />
              <ListItemIcon>
                {item.subNav && subnav
                  ? item.iconOpened
                  : item.subNav
                  ? item.iconClosed
                  : null}
              </ListItemIcon>
            </ListItem>
            <List>
              {subnav &&
                item.subNav.map((item, index) => {
                  return (
                    <ListItem button to={item.path} key={index}>
                      {item.title}
                    </ListItem>
                  );
                })}
            </List>
          </List>
        );
      })}
    </nav>
  );
}
 */
