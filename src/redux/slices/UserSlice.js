import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { GET_TOKEN } from "../../constants/API";

// First, create the thunk
export const fetchToken = createAsyncThunk("users/fetchToken", async (user) => {
  try {
    const response = await axios.post(GET_TOKEN, user);
    return response.data;
  } catch (error) {
    return error;
  }
});
const initialState = {
  token: null,
  loading: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchToken.pending, (state, action) => {
      // Add user to the state array
      state.loading.push(true);
    });
    builder.addCase(fetchToken.fulfilled, (state, action) => {
      // Add user to the state array
      state.loading.push(false);
      state.token.push(action.payload);
    });
    builder.addCase(fetchToken.rejected, (state, action) => {
      // Add user to the state array
      state.loading.push(false);
      state.error.push(action.payload);
    });
  },
});
