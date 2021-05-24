import { Button } from "antd";
import { Typography } from "antd";
const { Title } = Typography;

const CarComparison = () => {
  return (
    <section className="car-comparison">
      <Title level={2}>Car Comparison</Title>
      <div className="car-comparison__body">
        <div className="car-comparison__main">
          <a href="/">
            <div className="car-comparison__car">
              <img src="https://cache1.pakwheels.com/system/car_generation_pictures/4635/medium/Audi_Q7_2017.jpg?1496831509" />
              <p>Audi Q7</p>
            </div>
          </a>
          <div className="car-comparison__vs">VS</div>
          <a href="/">
            <div className="car-comparison__car">
              <img src="https://cache3.pakwheels.com/system/car_generation_pictures/5258/medium/x5.jpg?1595597749" />
              <p>BMW X5 Series</p>
            </div>
          </a>
        </div>
        <Button type="primary" className="car-comparison__btn" block>
          View Comparison
        </Button>
      </div>
    </section>
  );
};

export default CarComparison;
