import { SET_SELECTED_ITEM } from "./constants";

export function setSelectedItem(data) {
  return {
    type: SET_SELECTED_ITEM,
    data,
  };
}
