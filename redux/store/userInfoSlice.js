import { createSlice } from "@reduxjs/toolkit";
import { submitUserInfo, submitUserImage } from "../thunks/submitUserThunk";
import { fetchUserInfo, fetchUserImage } from "../thunks/fetchUserThunk";

export const userInfoSlice = createSlice({
  name: "userInfo",
  initialState: {
    name: "",
    dob: "",
    feet: "",
    inch: "",
    activity: "",
    time: "",
  },
  reducers: {
    registerUserInfo: (state, action) => {
      state.name = action.payload.name;
      state.dob = action.payload.dob;
      state.feet = action.payload.feet;
      state.inch = action.payload.inch;
      state.activity = action.payload.activity;

      state.isLoading = action.payload.isLoading;
      state.error = action.payload.error;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(submitUserInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(submitUserInfo.fulfilled, (state, action) => {
        state.isLoading = false;
        if (action.payload && action.payload.details) {
          // Update the state with the fetched data
          state.name = action.payload.details.name;
          state.dob = action.payload.details.dob;
          state.feet = action.payload.details.feet;
          state.inch = action.payload.details.inch;
          state.activity = action.payload.details.activity;
          state.time = action.payload.details.time;
        }
      })
      .addCase(submitUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload.error;
      })
      .addCase(fetchUserInfo.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUserInfo.fulfilled, (state, action) => {
        // Check if payload and details exist
        if (action.payload && action.payload.details) {
          // Update the state with the fetched data
          state.name = action.payload.details.name;
          state.dob = action.payload.details.dob;
          state.feet = action.payload.details.feet;
          state.inch = action.payload.details.inch;
          state.activity = action.payload.details.activity;
          state.time = action.payload.details.time;
        }

        state.isLoading = false;
      })
      .addCase(fetchUserInfo.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload ? action.payload.error : null;
      });
  },
});

export const { registerUserInfo } = userInfoSlice.actions;

export default userInfoSlice.reducer;
