import { BrowserView, MobileView } from "react-device-detect";
import Carousel from "react-multi-carousel";

const responsive = {
  allSize: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const Budget = () => {
  return (
    <>
      <BrowserView>
        <div className="browse-used-cars-text">
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
        <Carousel responsive={responsive} showDots>
          <div className="browse-used-cars-text">
            <a href="/">Cars under 2 lacs</a>
            <a href="/">Cars under 3 lacs</a>
            <a href="/">Cars under 4 lacs</a>
            <a href="/">Cars under 5 lacs</a>
            <a href="/">Cars under 6 lacs</a>
            <a href="/">Cars under 7 lacs</a>
            <a href="/">Cars under 8 lacs</a>
            <a href="/">Cars under 9 lacs</a>
          </div>

          <div className="browse-used-cars-text">
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
