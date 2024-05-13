import {
  GET_MENU_BY_USER_REQUEST,
  GET_MENU_BY_USER_SUCCESS,
  GET_MENU_BY_USER_FAILURE,
} from "../../constants/Action";
import axios from "axios";
export const fetchGetMenuByUserRequest = () => {
  return { type: GET_MENU_BY_USER_REQUEST };
};
export const fetchGetMenuByUserSuccess = (data) => {
  return { type: GET_MENU_BY_USER_SUCCESS, payload: data };
};
export const ffetchGetMenuByUserFailure = (error) => {
  return { type: GET_MENU_BY_USER_FAILURE, payload: error.message };
};
// trả về 1 dispatch
export const fetchGetMenuByUser = (user) => {
  return (dispatch) => {
    dispatch();
  };
};
