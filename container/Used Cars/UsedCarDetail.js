import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsedCarDetails } from "../../redux/actions/usedCarDetails";
import { useRouter } from "next/router";
import { Card, Typography, Statistic, Row, Col, Button } from "antd";
import { PhoneFilled, HeartOutlined } from "@ant-design/icons";
import LoadingIcon from "../../components/UI/LoadingIcon";
import Carousel from "react-multi-carousel";
import { addFavorite } from "../../settings/service";

const responsive = {
  xxl: {
    breakpoint: { max: 4000, min: 1201 },
    items: 1,
  },
  xl: {
    breakpoint: { max: 1200, min: 992 },
    items: 1,
  },
  lg: {
    breakpoint: { max: 991, min: 768 },
    items: 1,
  },
  md: {
    breakpoint: { max: 767, min: 576 },
    items: 1,
  },
  sm: {
    breakpoint: { max: 575, min: 0 },
    items: 1,
  },
};

const UsedCarDetail = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch();
  useEffect(() => {
    if (id) dispatch(getUsedCarDetails(id));
  }, [id]);
  const usedCar = useSelector(state => state.usedCarDetails);
  const token = useSelector(state => state.auth.token);
  const handleFavorite = async () => {
    if (token) {
      await addFavorite(token, id);
      console.log("called");
    }
  };
  if (usedCar.isLoading) {
    return (
      <section className="container--section">
        <LoadingIcon />
      </section>
    );
  }
  return (
    <section className="container--section--less used-car-details">
      <div className="used-car-details__cont">
        <Card>
          <h2 className="used-car-details__title">{usedCar.result.title}</h2>
          <div className="used-car-details__city">{usedCar.result.city}</div>
          <div className="used-car-details__img__cont">
            <Carousel responsive={responsive} showDots infinite>
              {usedCar.result.images.map(img => (
                <div className="used-car-details__img__box">
                  <img id={img} src={img} className="used-car-details__img" />
                  <HeartOutlined onClick={handleFavorite} />
                </div>
              ))}
            </Carousel>
          </div>
          <Row gutter={16} style={{ marginTop: 10 }}>
            <Col xl={6} md={12} xs={12}>
              <Card>
                <Statistic
                  title="Model Year"
                  value={usedCar.result.modelYear}
                />
              </Card>
            </Col>
            <Col xl={6} md={12} xs={12}>
              <Card>
                <Statistic
                  title="Mileage"
                  value={usedCar.result.milage}
                  suffix="km"
                />
              </Card>
            </Col>
            <Col xl={6} md={12} xs={12}>
              <Card>
                <Statistic
                  title="Engine Type"
                  value={usedCar.result.engineType}
                />
              </Card>
            </Col>
            <Col xl={6} md={12} xs={12}>
              <Card>
                <Statistic
                  title="Brand New"
                  value={usedCar.result.brandNew ? "Yes" : "No"}
                />
              </Card>
            </Col>
          </Row>
          <ul className="used-car-details__specs">
            <li>
              <p>Registered City</p>
              <p>{usedCar.result.registrationCity}</p>
            </li>
            <li>
              <p>Assembly</p>
              <p>{usedCar.result.engineType ? "Local" : "Imported"}</p>
            </li>
            <li>
              <p>Color</p>
              <p>Black</p>
            </li>
          </ul>

          <div>
            <Typography.Title level={3}>Seller's Comments</Typography.Title>
            <p>{usedCar.result.description}</p>
          </div>
        </Card>

        <div>
          <Card>
            <h2 className="used-car-details__price">
              <Statistic value={usedCar.result.price} prefix="PKR" />
            </h2>
            <Button className="used-car-details__contact" size="large">
              <PhoneFilled />
              {usedCar.result.contact}
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default UsedCarDetail;
