import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../slices/authSlice";
import checkTokenExpirationMiddleware from "../middlewares/checkTokenExpirationMiddleware";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(checkTokenExpirationMiddleware),
});
export default store;
