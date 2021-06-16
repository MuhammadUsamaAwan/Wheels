import { combineReducers } from "redux";
import auth from "./slices/auth";
import manufacturer from "./slices/manufacturer";
import img from "./slices/img";
import personalAds from "./slices/personalAds";
import favAds from "./slices/favAds";
import cars from "./slices/cars";
import carDetails from "./slices/carDetails";
import filteredAds from "./slices/filteredAds";

export default combineReducers({
  auth,
  manufacturer,
  cars,
  carDetails,
  img,
  personalAds,
  favAds,
  filteredAds
});
