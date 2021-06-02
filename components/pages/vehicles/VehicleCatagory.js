import Carousel from "react-multi-carousel";
import VehicleCatagoryItem from "./VehicleCatagoryItem";
import { BrowserView, MobileView } from "react-device-detect";
import { Typography } from "antd";

const responsive = {
  allSize: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const VehicleCatagory = ({ heading }) => {
  return (
    <>
      <BrowserView>
        <Typography.Title level={2}>{heading}</Typography.Title>
        <Carousel responsive={responsive} showDots>
          <div className="vehicle-catagory--card">
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
          </div>
          <div className="vehicle-catagory--card">
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
          </div>
        </Carousel>
      </BrowserView>

      <MobileView>
        <Typography.Title level={2}>{heading}</Typography.Title>
        <Carousel responsive={responsive} showDots>
          <div className="vehicle-catagory--card">
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
          </div>
          <div className="vehicle-catagory--card">
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
          </div>
          <div className="vehicle-catagory--card">
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
          </div>
          <div className="vehicle-catagory--card">
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
            <VehicleCatagoryItem />
          </div>
        </Carousel>
      </MobileView>
    </>
  );
};

export default VehicleCatagory;
