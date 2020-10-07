import { searchApi, signupApi, loginApi, addBankApi } from "./apis";
import {
  SET_SELECTED_ITEM,
  SET_SEARCH_RESULT,
  SEARCH_API_FAILURE,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  ADD_BANK_SUCCESS,
  ADD_BANK_FAILURE,
  LOGOUT,
} from "./constants";
import { push } from "connected-react-router";

export function setSelectedItem(data) {
  return {
    type: SET_SELECTED_ITEM,
    data,
  };
}

export async function search(dispatch, data) {
  const response = await searchApi(data);
  if (response && response.status === 200) {
    dispatch({
      type: SET_SEARCH_RESULT,
      data: response.data && response.data.length > 0 ? response.data[0] : {},
    });
    dispatch(setSelectedItem(1));
  } else {
    dispatch({
      type: SEARCH_API_FAILURE,
      data: response ? response.data.error : "",
    });
  }
}

export async function signup(dispatch, data) {
  let response = await signupApi(data);
  console.log(response);
  if (response && response.status === 200) {
    dispatch({ type: SIGN_UP_SUCCESS, data: response.data });
    dispatch(push("/dashboard"));
  } else {
    dispatch({
      type: SIGN_UP_FAILURE,
      data: response ? response.data.error : "",
    });
  }
}

export async function login(dispatch, data) {
  const response = await loginApi(data);
  if (response && response.status === 200) {
    dispatch({ type: LOGIN_SUCCESS, data: response.data });
    dispatch(push("/dashboard"));
  } else {
    dispatch({
      type: LOGIN_FAILURE,
      data: response ? response.data.error : "",
    });
  }
}

export async function logout(dispatch) {
  dispatch({ type: LOGOUT });
  dispatch(push("/login"));
}

export async function addBank(dispatch, data) {
  const response = await addBankApi(data);
  if (response && response.status === 200) {
    dispatch({ type: ADD_BANK_SUCCESS, data: response.data });
  } else {
    dispatch({
      type: ADD_BANK_FAILURE,
      data: response ? response.data.error : "",
    });
  }
}
