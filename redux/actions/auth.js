import axios from "axios";
import { LOGIN, LOGIN_REMEMBER } from "../slices/auth";
import { toast } from "react-toastify";
import { baseURL } from "../../config/config";

// login user
export const loginAction = (email, password, remember) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ email, password });
  try {
    const res = await axios.post(`${baseURL}/authenticate`, body, config);
    if (remember) dispatch(LOGIN_REMEMBER(res.data));
    else dispatch(LOGIN(res.data));
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

// register user
export const registerAction = (name, email, password) => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ name, email, password });
  try {
    const res = await axios.post(`${baseURL}/register`, body, config);
    toast.success("Signup successful! Login to continue");
  } catch (err) {
    toast.error(err.response.data.message);
  }
};
