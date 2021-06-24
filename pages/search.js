import { Collapse, Form, Input, Button, Select, Typography, Empty } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import {searchAdvertisement} from "../redux/actions/advertisements";
import LoadingIcon from "../components/UI/LoadingIcon"
import VehicleResult from '../components/UI/VehicleResult';

const Search = () => {
  const dispatch = useDispatch();
  const filteredAds = useSelector(state => state.filteredAds)
  const { Panel } = Collapse;
  const { Option, OptGroup } = Select;
  const onFinish = (values) => {
    dispatch(searchAdvertisement(values));
  }
  return (
    <div className="page-start container grey-bg">
      <Form onFinish={onFinish}>
        <Typography.Title level={3}>Show Results By:</Typography.Title>
        <Collapse>
          <Panel header="Search by Text" id="1">
            <Form.Item name="text">
              <Input placeholder="e.g. Honda Civic" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">Go</Button>
            </Form.Item>
          </Panel>
          <Panel header="Vehicle Type" id="2">
            <Form.Item name="vehicleType">
            <Select placeholder="Vehicle Type" allowClear>
                <Option value="car">Car</Option>
                <Option value="bike">Bikes</Option>
                <Option value="van">Van</Option>
                <Option value="bus">Bus</Option>
                <Option value="truck">Truck</Option>
                <Option value="rikshaw">Rikshaw</Option>
                <Option value="tractor">Tractor</Option>
              </Select>
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">Go</Button>
            </Form.Item>
          </Panel>
          <Panel header="Price Range" id="3">
            <Form.Item name="minPrice">
              <Input placeholder="From" />
            </Form.Item>
            <Form.Item name="maxPrice">
              <Input placeholder="To" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">Go</Button>
            </Form.Item>
          </Panel>
          <Panel header="Location" id="4">
            <Form.Item name="country">
              <Input placeholder="Country" />
            </Form.Item>
            <Form.Item name="state">
              <Select placeholder="State" allowClear>
                <Option value="Punjab">Punjab</Option>
                <Option value="Sindh">Sindh</Option>
                <Option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</Option>
                <Option value="Balochistan">Balochistan</Option>
              </Select>
            </Form.Item>
            <Form.Item name="city">
              <Select placeholder="City" allowClear>
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
            <Form.Item name="registrationCity">
              <Select placeholder="City" allowClear>
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
            <Form.Item>
              <Button htmlType="submit">Go</Button>
            </Form.Item>
          </Panel>
          <Panel header="Model Range" id="5">
            <Form.Item name="maxModelYear">
              <Input placeholder="From" />
            </Form.Item>
            <Form.Item name="minModelYear">
              <Input placeholder="To" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">Go</Button>
            </Form.Item>
          </Panel>
          <Panel header="Other Filters" id="6">
            <Form.Item name="minPower">
              <Input placeholder="Min Engine Capacity" />
            </Form.Item>
            <Form.Item name="maxPower">
              <Input placeholder="Max Engine Capacity" />
            </Form.Item>
            <Form.Item name="minMilage">
              <Input placeholder="Min Mileage" />
            </Form.Item>
            <Form.Item name="maxMilage">
              <Input placeholder="Max Mileage" />
            </Form.Item>
            <Form.Item name="local">
              <Select placeholder="Assembly" allowClear>
                <Option value={true}>Local</Option>
                <Option value={false}>Imported</Option>
              </Select>
            </Form.Item>
            <Form.Item name="bodyType">
              <Select placeholder="Body Type" allowClear>
                <Option value="Hachback">Hachback</Option>
                <Option value="Sedan">Sedan</Option>
                <Option value="SUV">SUV</Option>
              </Select>
            </Form.Item>
            <Form.Item name="engineType">
              <Select placeholder="Engine Type" allowClear>
                <Option value="Petrol">Petrol</Option>
                <Option value="Diesel">Diesel</Option>
                <Option value="Electric">Electric</Option>
                <Option value="CNG">CNG</Option>
              </Select>
            </Form.Item>
            <Form.Item name="transmission">
              <Select placeholder="Transmission" allowClear>
                <Option value="Auto">Auto</Option>
                <Option value="Manual">Manual</Option>
              </Select>
            </Form.Item>
            <Form.Item name="color">
              <Input placeholder="Color" />
            </Form.Item>
            <Form.Item>
              <Button htmlType="submit">Go</Button>
            </Form.Item>
          </Panel>
        </Collapse>
      </Form>
      <div>
        <Typography.Title level={3}>Results</Typography.Title>
        {filteredAds.isLoading || filteredAds.result.length === 0 ? <Empty />
        :
        filteredAds.result.map(vehicle => (
          <VehicleResult key={vehicle._id} id={vehicle._id} image={vehicle.images[0]} title={vehicle.title}
            city={vehicle.city} modelYear={vehicle.modelYear} mileage={vehicle.milage}
            engineType={vehicle.engineType} engineCapacity={vehicle.power} transmission={vehicle.transmission}
            featured={vehicle.featured} vehicleType={vehicle.vehicleType} price={vehicle.price}
          />
        ))
        }
      </div>
    </div>
  )
}

export default Search
