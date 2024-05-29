import { jwtDecode } from "jwt-decode";
import { logout } from "../slices/authSlice";

const checkTokenExpirationMiddleware = (store) => (next) => (action) => {
  // Lấy trạng thái hiện tại của store
  const state = store.getState();
  const token = state.auth.token;

  //Nếu có token kiểm tra thời gian hết hạn
  if (token) {
    const decodedToken = jwtDecode(token);
    const currentTime = Date.now() / 1000;
    //Nếu token đã hết hạn, ditpatch logout
    if (decodedToken.exp < currentTime) {
      store.dispatch(logout());
    }
  }
  return next(action);
};
export default checkTokenExpirationMiddleware;
