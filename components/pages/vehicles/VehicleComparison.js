import { Button } from "antd";
import { Typography } from "antd";
const { Title } = Typography;

const VehicleComparison = () => {
  return (
    <section className="vehicle-comparison">
      <Title level={2}>Vehicle Comparison</Title>
      <div className="vehicle-comparison__body">
        <div className="vehicle-comparison__main">
          <a href="/">
            <div className="vehicle-comparison__vehicle">
              <img src="https://cache1.pakwheels.com/system/car_generation_pictures/4635/medium/Audi_Q7_2017.jpg?1496831509" />
              <p>Audi Q7</p>
            </div>
          </a>
          <div className="vehicle-comparison__vs">VS</div>
          <a href="/">
            <div className="vehicle-comparison__vehicle">
              <img src="https://cache3.pakwheels.com/system/car_generation_pictures/5258/medium/x5.jpg?1595597749" />
              <p>BMW X5 Series</p>
            </div>
          </a>
        </div>
        <Button type="primary" className="vehicle-comparison__btn" block>
          View Comparison
        </Button>
      </div>
    </section>
  );
};

export default VehicleComparison;
