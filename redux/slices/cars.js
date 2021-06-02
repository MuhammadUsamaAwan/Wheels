import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "cars",
  initialState: {
    isLoading: true,
  },
  reducers: {
    GET_CARS: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    },
  },
});

export const { GET_CARS } = slice.actions;
export default slice.reducer;
