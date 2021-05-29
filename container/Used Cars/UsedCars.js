import Budget from "../../components/Home/Browse Cars/Budget";
import Catagory from "../../components/Home/Browse Cars/Catagory";
import FeaturedCars from "../../components/Used Cars/FeaturedCars";
import { Typography } from "antd";

const UsedCars = () => {
  return (
    <section className="container--section">
      <FeaturedCars />

      <div className="pt-5">
        <Typography.Title level={2}>Browse Cars By Catagory</Typography.Title>
        <Catagory />
      </div>

      <div className="pt-5">
        <Typography.Title level={2}>Browse Cars By Budget</Typography.Title>
        <Budget />
      </div>
    </section>
  );
};

export default UsedCars;
