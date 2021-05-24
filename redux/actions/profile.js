import axios from "axios";
import { GET_PERSONAL_ADS } from "../slices/personalAds";
import { GET_FAV_ADS } from "../slices/favAds";
import { toast } from "react-toastify";
import { baseURL } from "../../settings/config";

// get personal advertisements
export const getPersonalAds = token => async dispatch => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const res = await axios.get(
      `${baseURL}/api/get-personal-adverisements`,
      config
    );
    dispatch(GET_PERSONAL_ADS(res.data));
  } catch (err) {
    toast.error(err.response.data.message);
  }
};

// get favorite advertisements
export const getFavAds = token => async dispatch => {
  const config = {
    headers: {
      Authorization: token,
    },
  };
  try {
    const res = await axios.get(`${baseURL}/api/get-favourite`, config);
    dispatch(GET_FAV_ADS(res.data));
  } catch (err) {
    toast.error(err.response.data.message);
  }
};
