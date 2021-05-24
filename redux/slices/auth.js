import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";

const slice = createSlice({
  name: "auth",
  initialState: {
    token: Cookie.get("token"),
    user: Cookie.get("user"),
    isLoggedIn: Cookie.get("isLoggedIn") || false,
  },
  reducers: {
    LOGIN: (state, action) => {
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      };
    },
    LOGIN_REMEMBER: (state, action) => {
      Cookie.set("user", action.payload.user);
      Cookie.set("token", action.payload.token);
      Cookie.set("isLoggedIn", true);
      return {
        ...state,
        ...action.payload,
        isLoggedIn: true,
      };
    },
  },
});

export const { LOGIN, LOGIN_REMEMBER } = slice.actions;
export default slice.reducer;
