import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
  name: "manufacturer",
  initialState: {
    isLoading: true,
  },
  reducers: {
    GET_MANUFACTURERS: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isLoading: false,
      };
    },
  },
});

export const { GET_MANUFACTURERS } = slice.actions;
export default slice.reducer;
