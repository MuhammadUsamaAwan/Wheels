import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "carDetails",
  initialState: {
    isLoading: true,
  },
  reducers: {
    GET_CAR_DETAILS: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    },
  },
});

export const { GET_CAR_DETAILS } = slice.actions;
export default slice.reducer;
