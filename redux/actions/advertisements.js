import axios from "axios";
import { baseURL } from "../../config/config";
import { GET_CARS } from "../slices/cars";
import { GET_CAR_DETAILS } from "../slices/carDetails";
import { FILTERED_ADS } from "../slices/filteredAds";

// get all advertisements
export const getAdvertisements = () => async dispatch => {
  try {
    const res = await axios.get(`${baseURL}/get-all-advertisement`);
    dispatch(GET_CARS(res.data));
  } catch (err) {
    console.error("Internal Server Error");
  }
};

// get single advertisements
export const getSingleAdvertisement = advertisementId => async dispatch => {
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
    dispatch(GET_CAR_DETAILS(res.data));
  } catch (err) {
    console.error("Internal Server Error");
  }
};


// search advertisements
export const searchAdvertisement = values => async dispatch => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  Object.keys(values).forEach(key => values[key] === undefined && delete values[key])
  console.log(values)
  try {
    const res = await axios.post(
      `${baseURL}/filter`,
      values,
      config
    );
    dispatch(FILTERED_ADS(res.data));
  } catch (err) {
    console.error("Internal Server Error");
  }
};