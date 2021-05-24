import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "usedCarDetails",
  initialState: {
    isLoading: true,
  },
  reducers: {
    GET_USED_CAR_DETAILS: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    },
  },
});

export const { GET_USED_CAR_DETAILS } = slice.actions;
export default slice.reducer;
