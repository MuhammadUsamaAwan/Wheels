import axios from "axios";
import { baseURL } from "../../config/config";
import { GET_CARS } from "../slices/cars";

// get all advertisements
export const getAdvertisements = () => async dispatch => {
  try {
    const res = await axios.get(`${baseURL}/get-all-advertisement`);
    dispatch(GET_CARS(res.data));
  } catch (err) {
    console.error("Internal Server Error");
  }
};
