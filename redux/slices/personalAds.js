import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "personalAd",
  initialState: {
    isLoading: true,
  },
  reducers: {
    GET_PERSONAL_ADS: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    },
  },
});

export const { GET_PERSONAL_ADS } = slice.actions;
export default slice.reducer;
