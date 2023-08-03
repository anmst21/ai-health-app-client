import { createSlice } from "@reduxjs/toolkit";
import { fetchUserInfo } from "../thunks/fetchUserThunk";

const optionsSlice = createSlice({
  name: "options",
  initialState: { preference: [], indifference: [] },
  reducers: {
    addPreferenceOption: (state, action) => {
      const index = state.preference.findIndex(
        (option) => option.value === action.payload.value
      );
      if (index === -1) state.preference.push(action.payload);
    },
    removePreferenceOption: (state, action) => {
      state.preference = state.preference.filter(
        (option) => option.label !== action.payload.label
      );
    },
    addIndifferenceOption: (state, action) => {
      const index = state.indifference.findIndex(
        (option) => option.value === action.payload.value
      );
      if (index === -1) state.indifference.push(action.payload);
    },
    removeIndifferenceOption: (state, action) => {
      state.indifference = state.indifference.filter(
        (option) => option.label !== action.payload.label
      );
    },
    setPreferences: (state, action) => {
      state.preference = action.payload;
    },
    setIndifferences: (state, action) => {
      state.indifference = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchUserInfo.fulfilled, (state, action) => {
      // Update the preferences and indifferences with the fetched data
      state.preference = action.payload.preferences.map((preference) => ({
        label: preference,
      }));
      state.indifference = action.payload.indifferences.map((indifference) => ({
        label: indifference,
      }));
    });
  },
});

export const {
  addPreferenceOption,
  removePreferenceOption,
  addIndifferenceOption,
  removeIndifferenceOption,
  setPreferences,
  setIndifferences,
} = optionsSlice.actions;
export default optionsSlice.reducer;
