import { createSlice } from "@reduxjs/toolkit";
import { fetchPostsInfo } from "../thunks/fetchPostsThunk";
import { deleteUser } from "../thunks/deleteUserThunk";

// Define the initial state
const initialState = {
  posts: [],
  status: "idle",
  error: null,
};

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPostsInfo.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchPostsInfo.fulfilled, (state, action) => {
        state.status = "succeeded";
        // Add any fetched posts to the array
        state.posts = action.payload;
      })
      .addCase(fetchPostsInfo.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(deleteUser.fulfilled, (state, action) => {
        console.log(action.payload);
        // Remove the post with the corresponding ID from state
        state.posts = state.posts.filter(
          (post) => post._id !== action.payload.id
        );
      });
  },
});

export default postsSlice.reducer;
