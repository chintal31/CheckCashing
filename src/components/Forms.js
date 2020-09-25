import React from "react";
import { connect } from "react-redux";

import Customer from "../containers/Customers";
import Search from "../containers/Search";
import Addcheck from "../containers/Addcheck";
import Addcustomer from "../containers/Addcustomer";
import Retake from "../containers/Retake";
import Badchecks from "../containers/Badchecks";
import Advancedsearch from "../containers/Advancedsearch";
import Addbank from "../containers/Addbank";

function Forms(props) {
  const renderSelectedComponent = (selectedOption) => {
    switch (selectedOption) {
      case 0:
        return <Search />;
      case 1:
        return <Customer />;
      case 2:
        return <Addcheck />;
      case 3:
        return <Badchecks />;
      case 4:
        return <Advancedsearch />;
      case 5:
        return <Addcustomer />;
      case 6:
        return <Addbank />;
      case 7:
        return <Retake />;
      default:
        return <Search />;
    }
  };
  return <>{renderSelectedComponent(props.selectedItem)}</>;
}

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    selectedItem: state.sideMenuReducer.selectedItem,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Forms);
