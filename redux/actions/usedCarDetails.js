import axios from "axios";
import { GET_USED_CAR_DETAILS } from "../slices/usedCarDetails";
import { toast } from "react-toastify";
import { baseURL } from "../../config/config";

//get used car
export const getUsedCarDetails = advertisementId => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  const body = JSON.stringify({ advertisementId });
  try {
    const res = await axios.post(
      `${baseURL}/get-single-advertisement`,
      body,
      config
    );
    dispatch(GET_USED_CAR_DETAILS(res.data));
  } catch (err) {
    toast.error(err.response.data.message);
  }
};
