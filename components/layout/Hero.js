import { Input, Select, Button, Form } from "antd";
import { SearchOutlined, ArrowRightOutlined } from "@ant-design/icons";
const { Option, OptGroup } = Select;
import { useDispatch } from "react-redux";
import {searchAdvertisement} from "../../redux/actions/advertisements";

const Hero = () => {
  const dispatch = useDispatch();
  const onFinish = (values) => {
    values.minPrice = values.minPrice * 100000;
    values.maxPrice = values.maxPrice * 100000;
    dispatch(searchAdvertisement(values));
  }
  return (
    <header className="hero">
      <h1 className="hero__heading">Find Used Vehicles in Pakistan</h1>
      <h2 className="hero__subtile">
        With thousands of vehicles, we have just the right one for you
      </h2>
      <Form layout="inline" onFinish={onFinish}>
        <Form.Item>
          <Input.Group compact>
            <Form.Item name="vehicleType">
              <Select placeholder="Vehicle Type" size="large" allowClear  style={{width: "14rem"}}>
                <Option value="car">Car</Option>
                <Option value="bike">Bikes</Option>
                <Option value="van">Van</Option>
                <Option value="bus">Bus</Option>
                <Option value="truck">Truck</Option>
                <Option value="rikshaw">Rikshaw</Option>
                <Option value="tractor">Tractor</Option>
              </Select>
            </Form.Item>
            <Form.Item name="text">
              <Input placeholder="Vehicle Make or Model" size="large" style={{width: "20rem"}} />
            </Form.Item>
            <Form.Item name="city">
              <Select placeholder="City" size="large" allowClear  style={{width: "14rem"}}>
                <Option value="All Cities">All Cities</Option>
                <OptGroup label="Popular Cities">
                  <Option value="Karachi">Karachi</Option>
                  <Option value="Lahore">Lahore</Option>
                  <Option value="Islamabad">Islamabad</Option>
                </OptGroup>
                <OptGroup label="Other Cities">
                  <Option value="Rawalpindi">Rawalpindi</Option>
                  <Option value="Peshawar">Peshawar</Option>
                </OptGroup>
              </Select>
            </Form.Item>
            <Form.Item name="minPrice">
              <Input placeholder="Min Price (lacs)" size="large" style={{width: "14rem"}} />
              </Form.Item>
              <Form.Item name="maxPrice">
              <Input placeholder="Max Price (lacs)" size="large" style={{width: "14rem"}} />
              </Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              icon={<SearchOutlined />}
              size="large"
            />
          </Input.Group>
        </Form.Item>
      </Form>

      <form className="hero__form--mobile">
        <Input placeholder="Search Vehicles" />
      </form>
      <Button type="default" href="/search">
        Advanced Filters
        <ArrowRightOutlined />
      </Button>
    </header>
  );
};

export default Hero;
