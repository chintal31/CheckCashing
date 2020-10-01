import React from "react";
import Customer from "./containers/Addbank";
import Search from "./containers/Search";

export function renderSelectedComponent(val = "") {
  switch (val) {
    case 0:
      return <Search />;
    case 1:
      return <Customer />;
    default:
      return <Search />;
  }
}
