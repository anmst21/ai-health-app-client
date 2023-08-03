import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchPostsInfo = createAsyncThunk(
  "posts/fetch",
  async (_, { rejectWithValue }) => {
    try {
      const response = await axios.get("/api/posts");
      // Return the user info, which will be used as the payload for the `fulfilled` action
      return response.data;
    } catch (error) {
      // If there's an error, reject the promise with the error message
      return rejectWithValue({ error: error.message });
    }
  }
);
