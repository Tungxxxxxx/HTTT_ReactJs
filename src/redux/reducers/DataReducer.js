import {
  GET_TOKEN_REQUEST,
  GET_TOKEN_SUCCESS,
  GET_TOKEN_FAILURE,
} from "../../constants/Action";
const initState = {
  loading: false,
  menus: [],
  token: null,
};
export const getDataReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_TOKEN_REQUEST:
      return { ...state, loading: true };
    case GET_TOKEN_SUCCESS:
      return { ...state, loading: false, token: action.payload };
    case GET_TOKEN_FAILURE:
      return { ...state, loading: false };

    default:
      break;
  }
};
