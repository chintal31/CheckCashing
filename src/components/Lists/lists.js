import React, { useState, useEffect } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

import Customer from "../../containers/Addbank";
import Search from "../../containers/Search";

export default function Lists() {
  const [selectedItem, setSelectedItem] = useState(0);
  const renderSelectedComponent = (selectedOption) => {
    debugger;
    switch (selectedOption) {
      case 0:
        return <Search />;
      case 1:
        return <Customer />;
      default:
        return <Search />;
    }
  };
  useEffect(() => {
    renderSelectedComponent(0);
  }, []);
  return (
    <>
      <List>
        <ListItem
          button
          onClick={() => {
            setSelectedItem(0);
            renderSelectedComponent(0);
          }}
          value={0}
          selected={selectedItem == 0 ? true : false}
        >
          <ListItemText primary="Search" />
        </ListItem>
        <Divider />

        <ListItem
          button
          value={1}
          selected={selectedItem == 1 ? true : false}
          onClick={() => {
            setSelectedItem(1);
            renderSelectedComponent(1);
          }}
        >
          <ListItemText primary="Customer" />
        </ListItem>
        <Divider />
        <ListItem
          button
          value={2}
          selected={selectedItem == 2 ? true : false}
          onClick={() => {
            setSelectedItem(2);
            renderSelectedComponent(2);
          }}
        >
          <ListItemText primary="Add bank" />
        </ListItem>
      </List>
      <Divider />
    </>
  );
}
