import { combineReducers } from "redux";
import auth from "./slices/auth";
import manufacturer from "./slices/manufacturer";
import img from "./slices/img";
import usedCarDetails from "./slices/usedCarDetails";
import personalAds from "./slices/personalAds";
import favAds from "./slices/favAds";
import cars from "./slices/cars";

export default combineReducers({
  auth,
  manufacturer,
  img,
  cars,
  usedCarDetails,
  personalAds,
  favAds,
});
