import { combineReducers } from "redux";
import auth from "./slices/auth";
import manufacturer from "./slices/manufacturer";
import img from "./slices/img";
import usedCars from "./slices/usedCars";
import usedCarDetails from "./slices/usedCarDetails";
import personalAds from "./slices/personalAds";
import favAds from "./slices/favAds";

export default combineReducers({
  auth,
  manufacturer,
  img,
  usedCars,
  usedCarDetails,
  personalAds,
  favAds,
});
