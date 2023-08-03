import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const submitUserInfo = createAsyncThunk(
  "userInfo/submitUserInfo",
  async (formData, thunkAPI) => {
    try {
      const response = await axios.post("/api/submitUserInfo", formData);
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
export const submitUserPreferences = createAsyncThunk(
  "userInfo/api/submitPreferences",
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post("/api/submitPreferences", userInfo);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
export const submitUserIndifferences = createAsyncThunk(
  "userInfo/api/submitIndifferences",
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post("/api/submitIndifferences", userInfo);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);

export const submitUserDone = createAsyncThunk(
  "userInfo/api/submitUserDone",
  async (userInfo, thunkAPI) => {
    try {
      const response = await axios.post("/api/userInfoDone", userInfo);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue({ error: error.message });
    }
  }
);
