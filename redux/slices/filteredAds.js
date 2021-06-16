import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "filteredAds",
  initialState: {
    isLoading: true,
  },
  reducers: {
    FILTERED_ADS: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    },
  },
});

export const { FILTERED_ADS } = slice.actions;
export default slice.reducer;
