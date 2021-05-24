import axios from "axios";
import { GET_MANUFACTURERS } from "../slices/manufacturer";
import { toast } from "react-toastify";
import { baseURL } from "../../settings/config";

// get manufacturers
export const getManufacturers = token => async dispatch => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const res = await axios.get(`${baseURL}/api/get-manufacturer`, config);
    dispatch(GET_MANUFACTURERS(res.data));
  } catch (err) {
    toast.error(err.response.data.message);
  }
};
