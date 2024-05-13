import {
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAILURE,
} from "../../constants/Action";
import axios from "axios";
export const fetchGetMenuByUserRequest = () => {
  return { type: GET_TOKEN_REQUEST };
};
export const fetchGetMenuByUserSuccess = (data) => {
  return { type: GET_TOKEN_SUCCESS, payload: data };
};
export const ffetchGetMenuByUserFailure = (error) => {
  return { type: GET_TOKEN_FAILURE, payload: error.message };
};
// trả về 1 dispatch
export const fetchGetMenuByUser = (user) => {
  return (dispatch) => {
    dispatch();
  };
};