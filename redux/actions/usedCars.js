import axios from "axios";
import { GET_USED_CARS } from "../slices/usedCars";
import { baseURL } from "../../settings/config";

// get used cars
export const getUsedCars = () => async dispatch => {
  try {
    const res = await axios.get(`${baseURL}/get-all-advertisement`);
    dispatch(GET_USED_CARS(res.data));
  } catch (err) {
    console.error("Internal Server Error");
  }
};
