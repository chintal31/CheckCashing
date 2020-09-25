import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import { connect } from "react-redux";
import { setSelectedItem } from "../containers/SideMenuReducer/actions";

function Lists({ selectedItem, setSelectedItem }) {
  return (
    <>
      <List>
        <ListItem
          button
          onClick={() => {
            setSelectedItem(0);
          }}
          value={0}
          selected={selectedItem === 0 ? true : false}
        >
          <ListItemText primary="Search" />
        </ListItem>
        <Divider />

        <ListItem
          button
          value={1}
          selected={selectedItem === 1 ? true : false}
          onClick={() => {
            setSelectedItem(1);
          }}
        >
          <ListItemText primary="Customer" />
        </ListItem>
        <Divider />
        <ListItem
          button
          value={2}
          selected={selectedItem === 2 ? true : false}
          onClick={() => {
            setSelectedItem(2);
          }}
        >
          <ListItemText primary="Add check" />
        </ListItem>
      </List>
      <Divider />
      <ListItem
        button
        onClick={() => {
          setSelectedItem(3);
        }}
        value={3}
        selected={selectedItem === 3 ? true : false}
      >
        <ListItemText primary="Bad check" />
      </ListItem>
      <Divider />
      <ListItem
        button
        onClick={() => {
          setSelectedItem(4);
        }}
        value={4}
        selected={selectedItem === 4 ? true : false}
      >
        <ListItemText primary="Advanced search" />
      </ListItem>
      <Divider />
      <ListItem
        button
        onClick={() => {
          setSelectedItem(5);
        }}
        value={5}
        selected={selectedItem === 5 ? true : false}
      >
        <ListItemText primary="Add customer" />
      </ListItem>
      <Divider />
      <ListItem
        button
        onClick={() => {
          setSelectedItem(6);
        }}
        value={6}
        selected={selectedItem === 6 ? true : false}
      >
        <ListItemText primary="Add bank" />
      </ListItem>
      <Divider />
      <ListItem
        button
        onClick={() => {
          setSelectedItem(7);
        }}
        value={7}
        selected={selectedItem === 7 ? true : false}
      >
        <ListItemText primary="Retake" />
      </ListItem>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    selectedItem: state.sideMenuReducer.selectedItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setSelectedItem: (data) => dispatch(setSelectedItem(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Lists);
