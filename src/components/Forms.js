import React, { useState, useEffect } from "react";

import Customer from "../containers/Addbank";
import Search from "../containers/Search";

export default function Forms(props) {
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
    renderSelectedComponent(props.selectedOption);
  }, []);
  return <>{renderSelectedComponent(props.selectedOption)}</>;
}
