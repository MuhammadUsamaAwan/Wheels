import { useEffect } from "react";
import { getUsedCars } from "../../redux/actions/usedCars";
import { useSelector, useDispatch } from "react-redux";
import SellItem from "../../components/UI/SellItem";
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

const FeaturedCars = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsedCars());
  }, []);
  const usedCars = useSelector(state => state.usedCars);
  if (usedCars.isLoading) {
    return (
      <section className="section-container">
        <LoadingIcon />
      </section>
    );
  }
  return (
    <section className="section-container">
      <Typography.Title level={2}>Featured Used Cars for Sale</Typography.Title>
      <Carousel responsive={responsive}>
        {usedCars.result.map(car => (
          <SellItem
            id={car._id}
            imgURL={car.images[0]}
            ribbon="featured"
            title={car.title}
            price={car.price}
            city={car.city}
          />
        ))}
      </Carousel>
    </section>
  );
};

export default FeaturedCars;
