import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "usedCars",
  initialState: {
    isLoading: true,
  },
  reducers: {
    GET_USED_CARS: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    },
  },
});

export const { GET_USED_CARS } = slice.actions;
export default slice.reducer;
