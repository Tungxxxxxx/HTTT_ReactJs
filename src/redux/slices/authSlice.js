import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_TOKEN } from "../../constants/API";

// First, create the thunk
export const fetchToken = createAsyncThunk("users/fetchToken", async (user) => {
  try {
    const response = await axios.post(GET_TOKEN, user, {
      headers: {
        //"Content-Type": "application/json",
        // "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    console.log("response>>>>>>>>>>>>>>>>>", response);
    return response.data.access_token;
  } catch (error) {
    console.log(error);
    return error;
  }
});
const initialState = {
  token: null,
  isLoading: false,
  isError: false,
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
      state.token = null;
    },
  },
  extraReducers: (builder) => {
    // Thêm reducers cho các loại action bổ sung ở đây, và xử lý trạng thái loading nếu cần
    builder.addCase(fetchToken.pending, (state, action) => {
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchToken.fulfilled, (state, action) => {
      state.isLoading = false;
      state.token = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchToken.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.token = action.payload;
    });
  },
});
export const { logout } = authSlice.actions;
export default authSlice.reducer;
