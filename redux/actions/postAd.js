import axios from "axios";
import { toast } from "react-toastify";
import { baseURL } from "../../config/config";

// post ad
export const postAd = (token, values) => async dispatch => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    await axios.post(`${baseURL}/api/create-advertisement`, values, config);
    toast.success("Ad Successfully Posted!");
  } catch (err) {
    toast.error(err.response.data.message);
  }
};
