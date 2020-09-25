import produce from "immer";
import { SET_SELECTED_ITEM } from "./constants";

export const initialState = {
  selectedItem: 0,
  loading: false,
};

const sideMenuReducer = (state = initialState, action) =>
  produce(state, (draft) => {
    switch (action.type) {
      case SET_SELECTED_ITEM:
        return {
          ...state,
          selectedItem: action.data,
        };
      default:
        return state;
    }
  });
export default sideMenuReducer;
