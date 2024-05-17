import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_TOKEN } from "../../constants/API";

// First, create the thunk
export const fetchToken = createAsyncThunk("users/fetchToken", async (user) => {
  try {
    const response = await axios.post(GET_TOKEN, user, {
      headers: {
        // bạn có thể thêm các headers cần thiết tại đây, ví dụ:
        "Content-Type": "application/json",
      },
    });
    return response.token;
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

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchToken.pending, (state, action) => {
      console.log("pending");
      // Add user to the state array
      state.isLoading = true;
      state.isError = false;
    });
    builder.addCase(fetchToken.fulfilled, (state, action) => {
      console.log("fulfilled");
      // Add user to the state array
      state.isLoading = false;
      state.token = action.payload;
      state.isError = false;
    });
    builder.addCase(fetchToken.rejected, (state, action) => {
      console.log("rejected");
      // Add user to the state array
      state.isLoading = false;
      state.isError = true;
      state.token = action.payload;
    });
  },
});

export default userSlice.reducer;
