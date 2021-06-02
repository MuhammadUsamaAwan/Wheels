import { Rate } from "antd";

const VehicleReview = () => {
  return (
    <div className="vehicle-review">
      <div className="vehicle-review__container">
        <img src="https://cache2.pakwheels.com/system/car_generation_pictures/5381/original/elantra.jpg?1608016094" />
        <div>
          <a href="/" className="vehicle-review__title">
            Expansive But Excellent
          </a>
          <a href="/" className="vehicle-review__vehicle">
            Hyundai Elantra GLS
          </a>
          <div className="vehicle-review__details">
            <Rate disabled defaultValue={4} />
            <div className="vehicle-review__author">Bhatti</div>
            <div className="vehicle-review__date">April 27, 2021</div>
          </div>
        </div>
      </div>
      <p className="vehicle-review__text">
        Great car with sound less cabin. Very Good interior Power full 2000cc
        engine. Fuel economy is quite impressive as it gives me around 12-13
        km/l in city and on motorway with 120 cruise 16km/L under 100 cruise
        17-18 km/L.
      </p>
    </div>
  );
};

export default VehicleReview;
