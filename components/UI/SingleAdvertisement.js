import { Typography, Statistic, Row, Col, Card } from "antd";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
import ImageGallery from "react-image-gallery";
import { addFavorite } from "../../service/service";
import { useSelector } from "react-redux";

const SingleAdvertisement = ({ vehicle, id }) => {
  const images = vehicle.images.map(image => ({
    original: image,
    thumbnail: image,
    originalHeight: 450,
  }));
  const token = useSelector(state => state.auth.token);
  const addFav = () => {
    if (token) addFavorite(token, id);
    console.log(token);
  };
  return (
    <div className="single-adv">
      <div>
        <Typography.Title level={2} className="single-adv__title">
          {vehicle.title}
        </Typography.Title>
        <p className="single-adv__city">
          <img src="/images/map-pin.svg" alt="map pin" />
          {vehicle.city}
        </p>
        <div className="single-adv__images">
          <ImageGallery
            items={images}
            infinite={true}
            showPlayButton={false}
            showFullscreenButton={false}
          />
          {!vehicle.featured && (
            <div className="single-adv__featured">Featured</div>
          )}
          {vehicle.isFavorite ? <HeartOutlined onClick={addFav} />
          : <HeartFilled onClick={addFav} />
          }
        </div>
        <Row gutter={16} className="pb-2 pt-2">
          <Col span={6}>
            <Card className="single-adv__feature">
              <Statistic title="Model Year" value={vehicle.modelYear} />
            </Card>
          </Col>
          <Col span={6}>
            <Card className="single-adv__feature">
              <Statistic title="Mileage" value={vehicle.milage} />
            </Card>
          </Col>
          <Col span={6}>
            <Card className="single-adv__feature">
              <Statistic title="Engine Type" value={vehicle.engineType} />
            </Card>
          </Col>
          <Col span={6}>
            <Card className="single-adv__feature">
              <Statistic title="Transmission" value={vehicle.transmission} />
            </Card>
          </Col>
        </Row>
        <div className="single-adv__other-feature">
          <div>
            <div>Registered City</div>
            <div>{vehicle.registrationCity}</div>
          </div>
          <div>
            <div>Assembly</div>
            <div>{vehicle.local ? "Local" : "Imported"}</div>
          </div>
          <div>
            <div>Body Type</div>
            <div>{vehicle.bodyType ? vehicle.bodyType : "N/A"}</div>
          </div>
          <div>
            <div>Engine Capacity</div>
            <div>{vehicle.power ? vehicle.power : "N/A"}</div>
          </div>
          <div>
            <div>Exterior Color</div>
            <div>{vehicle.color ? vehicle.color : "N/A"}</div>
          </div>
          <div>
            <div>Brand New</div>
            <div>{vehicle.brandNew ? "Yes" : "No"}</div>
          </div>
        </div>
        <Typography.Title level={3} className="single-adv__seller-heading">
          Car Features
        </Typography.Title>
        <div className="single-adv__features">
          {vehicle.other.map(feature => (
            <div id={feature}>{feature}</div>
          ))}
        </div>
        <Typography.Title level={3} className="single-adv__seller-heading">
          Seller's Comments
        </Typography.Title>
        <p>{vehicle.description}</p>
      </div>
      <div>
        <Statistic
          className="single-adv__price"
          value={vehicle.price}
          prefix="PKR"
        />
        <div className="single-adv__phone pt-1">
          <div>
            <img src="/images/phone-call.svg" alt="phone" />
            <span>{vehicle.contact}</span>
          </div>
        </div>
        <Typography.Title level={3} className="single-adv__seller-heading">
          Seller's Info
        </Typography.Title>
        <div className="single-adv__dealer">
          <div>Dealer: <span>{vehicle.userId.name}</span></div>
          <div>Email: <span>{vehicle.userId.email}</span></div>
          <div>Verified: <span>{vehicle.userId.smsVerification ? "Yes" : "No"}</span></div>
          <div>Member Since: <span>{vehicle.userId.createdAt}</span></div>
        </div>
      </div>
    </div>
  );
};

export default SingleAdvertisement;
