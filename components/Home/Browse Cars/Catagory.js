import Carousel from "react-multi-carousel";
import BrowseCardItem from "./BrowseCardItem";
import { BrowserView, MobileView } from "react-device-detect";

const responsive = {
  allSize: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const Catagory = () => {
  return (
    <>
      <BrowserView>
        <Carousel responsive={responsive} showDots>
          <div className="browse-used-cars-card">
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
          </div>
          <div className="browse-used-cars-card">
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
          </div>
        </Carousel>
      </BrowserView>

      <MobileView>
        <Carousel responsive={responsive} showDots>
          <div className="browse-used-cars-card">
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
          </div>
          <div className="browse-used-cars-card">
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
          </div>
          <div className="browse-used-cars-card">
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
          </div>
          <div className="browse-used-cars-card">
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
            <BrowseCardItem />
          </div>
        </Carousel>
      </MobileView>
    </>
  );
};

export default Catagory;
