import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";

import mainReducer from "../containers/Mainreducer/mainReducer";

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    mainReducer,
  });
export default createRootReducer;
