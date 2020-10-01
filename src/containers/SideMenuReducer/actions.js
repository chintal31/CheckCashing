import { searchApi } from "./apis";
import {
  SET_SELECTED_ITEM,
  SET_SEARCH_RESULT,
  SEARCH_API_FAILURE,
} from "./constants";

export function setSelectedItem(data) {
  return {
    type: SET_SELECTED_ITEM,
    data,
  };
}

export async function search(dispatch, data) {
  //dispatch({ type: GET_POSTS_BY_ID_REQUEST });
  try {
    const response = await searchApi(data);
    dispatch({ type: SET_SEARCH_RESULT, data: response });
    dispatch(setSelectedItem(1));
  } catch (e) {
    dispatch({ type: SEARCH_API_FAILURE, data: e });
  }
}
