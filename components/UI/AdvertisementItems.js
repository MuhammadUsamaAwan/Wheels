import { useEffect } from "react";
import { getAdvertisements } from "../../redux/actions/advertisements";
import { useDispatch } from "react-redux";
import AdvertisementItem from "./AdvertisementItem";
import LoadingIcon from "../../components/UI/LoadingIcon";
import Carousel from "react-multi-carousel";
import { Typography } from "antd";

const responsive = {
  xxl: {
    breakpoint: { max: 4000, min: 1201 },
    items: 4,
  },
  xl: {
    breakpoint: { max: 1200, min: 992 },
    items: 4,
  },
  lg: {
    breakpoint: { max: 991, min: 768 },
    items: 3,
  },
  md: {
    breakpoint: { max: 767, min: 576 },
    items: 3,
  },
  sm: {
    breakpoint: { max: 575, min: 0 },
    items: 2,
  },
};

const AdvertisementItems = ({ heading, vehicles, type }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAdvertisements());
  }, []);
  if (vehicles.isLoading) {
    return (
      <section>
        <LoadingIcon />
      </section>
    );
  }
  return (
    <section className="container">
      <Typography.Title level={2}>{heading}</Typography.Title>
      <Carousel responsive={responsive}>
        {vehicles.result.map(vehicle => (
          <AdvertisementItem
            id={vehicle._id}
            imgURL={vehicle.images[0]}
            ribbon="featured"
            title={vehicle.title}
            price={vehicle.price}
            city={vehicle.city}
            type={type}
          />
        ))}
      </Carousel>
    </section>
  );
};

export default AdvertisementItems;
