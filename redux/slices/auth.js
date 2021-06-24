import { createSlice } from "@reduxjs/toolkit";
import Cookie from "js-cookie";

const slice = createSlice({
  name: "auth",
  initialState: {
    token: Cookie.get("token"),
    user: Cookie.get("user") ? JSON.parse(Cookie.get("user")) : {},
    isLoggedIn: Cookie.get("isLoggedIn") || false,
  },
  reducers: {
    LOGIN: (state, action) => {
      return {
        token: action.payload.token,
        user: action.payload.user,
        isLoggedIn: true,
      };
    },
    LOGIN_REMEMBER: (state, action) => {
      Cookie.set("user", action.payload.user);
      Cookie.set("token", action.payload.token);
      Cookie.set("isLoggedIn", true);
      return {
        token: action.payload.token,
        user: action.payload.user,
        isLoggedIn: true,
      };
    },
  },
});

export const { LOGIN, LOGIN_REMEMBER } = slice.actions;
export default slice.reducer;
