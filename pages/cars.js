import Hero from "../components/layout/Hero";
import VechicleFeatures from "../components/pages/vehicles/VehicleFeatures";
import AdvertisementItems from "../components/UI/AdvertisementItems";
import { useSelector } from "react-redux";
import VehicleCatagory from "../components/pages/vehicles/VehicleCatagory";
import VehicleBudget from "../components/pages/vehicles/VehicleBudget";
import VehicleComparison from "../components/pages/vehicles/VehicleComparison";
import VehicleBlog from "../components/pages/vehicles/VehicleBlog";

const cars = () => {
  const cars = useSelector(state => state.cars);
  return (
    <>
      <Hero />
      <VechicleFeatures />
      <AdvertisementItems heading="Featured Cars for Sell" vehicles={cars} />
      <div className="container pd-5 pt-5">
        <VehicleCatagory heading="Browse Used Cars by Category" />
      </div>
      <div className="container pd-5 pt-5">
        <VehicleBudget heading="Browse Used Cars by Budget" />
      </div>
      <div className="container pd-5 pt-5">
        <VehicleComparison />
      </div>
      <VehicleBlog />
    </>
  );
};

export default cars;
