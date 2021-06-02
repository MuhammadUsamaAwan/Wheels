import { BrowserView, MobileView } from "react-device-detect";
import Carousel from "react-multi-carousel";
import { Typography } from "antd";

const responsive = {
  allSize: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const Budget = ({ heading }) => {
  return (
    <>
      <BrowserView>
        <Typography.Title level={2}>{heading}</Typography.Title>
        <div className="vehicle-catagory--text">
          <a href="/">Cars under 2 lacs</a>
          <a href="/">Cars under 3 lacs</a>
          <a href="/">Cars under 4 lacs</a>
          <a href="/">Cars under 5 lacs</a>
          <a href="/">Cars under 6 lacs</a>
          <a href="/">Cars under 7 lacs</a>
          <a href="/">Cars under 8 lacs</a>
          <a href="/">Cars under 9 lacs</a>
          <a href="/">Cars under 10 lacs</a>
          <a href="/">Cars under 15 lacs</a>
          <a href="/">Cars under 20 lacs</a>
          <a href="/">Cars under 25 lacs</a>
          <a href="/">Cars under 30 lacs</a>
          <a href="/">Cars under 40 lacs</a>
        </div>
      </BrowserView>

      <MobileView>
        <Typography.Title level={2}>{heading}</Typography.Title>
        <Carousel responsive={responsive} showDots>
          <div className="vehicle-catagory--text">
            <a href="/">Cars under 2 lacs</a>
            <a href="/">Cars under 3 lacs</a>
            <a href="/">Cars under 4 lacs</a>
            <a href="/">Cars under 5 lacs</a>
            <a href="/">Cars under 6 lacs</a>
            <a href="/">Cars under 7 lacs</a>
            <a href="/">Cars under 8 lacs</a>
            <a href="/">Cars under 9 lacs</a>
          </div>

          <div className="vehicle-catagory--text">
            <a href="/">Cars under 10 lacs</a>
            <a href="/">Cars under 15 lacs</a>
            <a href="/">Cars under 20 lacs</a>
            <a href="/">Cars under 25 lacs</a>
            <a href="/">Cars under 30 lacs</a>
            <a href="/">Cars under 40 lacs</a>
          </div>
        </Carousel>
      </MobileView>
    </>
  );
};

export default Budget;
