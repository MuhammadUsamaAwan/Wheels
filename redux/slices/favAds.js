import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "favAds",
  initialState: {
    isLoading: true,
  },
  reducers: {
    GET_FAV_ADS: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    },
  },
});

export const { GET_FAV_ADS } = slice.actions;
export default slice.reducer;
