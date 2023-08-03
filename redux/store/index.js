import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import selectSlice from "./selectSlice";
import userInfoReducer from "./userInfoSlice";
import { apiSlice } from "../api/apiSlice";
import { imageSlice } from "../api/imageSlice";
import postsReducer from "./postsSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    options: selectSlice,
    userInfo: userInfoReducer,
    posts: postsReducer,
    [apiSlice.reducerPath]: apiSlice.reducer,
    [imageSlice.reducerPath]: imageSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
      thunk: true,
    }).concat(apiSlice.middleware, imageSlice.middleware),
});

export default store;
