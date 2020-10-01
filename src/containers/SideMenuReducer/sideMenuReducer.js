import produce from "immer";
import { SET_SELECTED_ITEM, SET_SEARCH_RESULT } from "./constants";

export const initialState = {
  selectedItem: 0,
  loading: false,
  customerData: {},
};

const sideMenuReducer = (state = initialState, action) =>
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
      default:
        return state;
    }
  });
export default sideMenuReducer;
