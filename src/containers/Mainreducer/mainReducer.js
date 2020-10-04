import produce from "immer";
import {
  SET_SELECTED_ITEM,
  SET_SEARCH_RESULT,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
} from "./constants";

export const initialState = {
  selectedItem: 0,
  loading: false,
  customerData: {},
  loggedInUser: {},
  signUpFailure: "",
  loginFailure: "",
};

const mainReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_SELECTED_ITEM:
        return {
          ...state,
          selectedItem: action.data,
        };
      case SET_SEARCH_RESULT:
        return {
          ...state,
          customerData: action.data,
        };
      case SIGN_UP_SUCCESS:
        return {
          ...state,
          signUpFailure: "",
          loggedInUser: action.data,
        };
      case SIGN_UP_FAILURE:
        return {
          ...state,
          signUpFailure: action.data,
        };
      case LOGIN_SUCCESS:
        return {
          ...state,
          loginFailure: "",
          loggedInUser: action.data,
        };
      case LOGIN_FAILURE:
        return {
          ...state,
          loginFailure: action.data,
        };
      case LOGOUT:
        return {
          ...state,
          loggedInUser: {},
          customerData: {},
        };
      default:
        return state;
    }
  });
export default mainReducer;
