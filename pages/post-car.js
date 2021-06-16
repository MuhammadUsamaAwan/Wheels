import { useEffect } from "react";
import {
  Typography,
  Form,
  Card,
  Input,
  Select,
  Button,
  Cascader,
  DatePicker,
  Checkbox,
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getManufacturers } from "../redux/actions/manufacturer";
import LoadingIcon from "../components/UI/LoadingIcon";
import UploadPics from "../components/UI/UploadPics";
import { postAd } from "../service/service";
import moment from "moment";

const { Option, OptGroup } = Select;
const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 21 },
};

const postCar = () => {
  const token = useSelector((state) => state.auth.token);
  const manufacturer = useSelector((state) => state.manufacturer);
  const img = useSelector((state) => state.img);
  let options = [];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getManufacturers(token));
  }, []);

  if (manufacturer.isLoading) {
    <section className="container page-start">
      <LoadingIcon />
    </section>;
  }

  if (!manufacturer.isLoading) {
    options = manufacturer.result.map((make) => ({
      value: make.title,
      label: make.title,
      children: make.model.map((model) => ({
        value: model._id,
        label: model.title,
      })),
    }));
  }

  const otherFeatures = [
    "ABS",
    "Air Bags",
    "Air Conditioning",
    "Alloy Rims",
    "AM/FM Radio",
    "CD Player",
    "Cassette Player",
    "Cool Box",
    "Cruise Control",
    "Climate Control",
    "DVD Player",
    "Front Speakers",
    "Front Camera",
    "Heated Seats",
    "Immobilizer Key",
    "Keyless Entry",
    "Navigation System",
    "Power Locks",
    "Power Mirrors",
    "Power Steering",
    "Power Windows",
    "Rear Seat Entertainment",
    "Rear AC Vents",
    "Rear Speakers",
    "Rear Camera",
    "Sun Roof",
    "Steering Switches",
    "USB and Auxillary Cable",
  ];

  const onFinish = (values) => {
    const images = {
      images: img,
    };
    values = { ...values, images };
    values = { ...values, vehicleType: "car" };
    values.modelId = values.modelId[1];
    if (values.other) {
      values.other = values.other.join(" ");
    }
    postAd(token, values);
  };
  return (
    <section className="container page-start">
      <Typography.Title level={2}>
        Sell Your Car In 3 Easy Steps!
      </Typography.Title>
      <Form {...layout} onFinish={onFinish} className="post-adv-form">
        <Card>
          <Typography.Title level={3}>
            Car Information
            <span>(All fields marked with * are mandatory)</span>
          </Typography.Title>

          <Form.Item
            label="Title"
            name="title"
            rules={[
              {
                required: true,
                message: "Please input your advertisement's title!",
              },
            ]}
            required
          >
            <Input type="text" />
          </Form.Item>

          <Form.Item
            label="Country"
            name="country"
            rules={[
              {
                required: true,
                message: "Please input your car's country!",
              },
            ]}
          >
            <Select>
              <Option value="Pakistan">Pakistan</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="State"
            name="state"
            rules={[
              {
                required: true,
                message: "Please input your car's state!",
              },
            ]}
          >
            <Select>
              <Option value="Punjab">Punjab</Option>
              <Option value="Sindh">Sindh</Option>
              <Option value="Khyber Pakhtunkhwa">Khyber Pakhtunkhwa</Option>
              <Option value="Balochistan">Balochistan</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="City"
            name="city"
            rules={[
              { required: true, message: "Please input your car's city!" },
            ]}
            required
          >
            <Select>
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

          <Form.Item
            label="Car Info"
            name="modelId"
            rules={[
              { required: true, message: "Please input your car's info!" },
            ]}
            required
          >
            <Cascader options={options} />
          </Form.Item>

          <Form.Item label="Registration City" name="registrationCity">
            <Select>
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

          <Form.Item
            label="Model Year"
            name="modelYear"
            rules={[
              {
                required: true,
                message: "Please input your car's model year!",
              },
            ]}
            required
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            label="Assembly"
            name="local"
            rules={[
              { required: true, message: "Please input your car's assembly!" },
            ]}
            required
          >
            <Select>
              <Option value={true}>Local</Option>
              <Option value={false}>Imported</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Brand New"
            name="brandNew"
            rules={[
              {
                required: true,
                message: "Please select if your car is brand new!",
              },
            ]}
            required
          >
            <Select>
              <Option value={true}>Yes</Option>
              <Option value={false}>No</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Color"
            name="color"
            rules={[
              {
                required: true,
                message: "Please input your car's exterior color!",
              },
            ]}
            required
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Engine Type"
            name="engineType"
            rules={[
              {
                required: true,
                message: "Please input your car's engine type!",
              },
            ]}
            required
          >
            <Select>
              <Option value="Petrol">Petrol</Option>
              <Option value="Diesel">Diesel</Option>
              <Option value="Electric">Electric</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Mileage"
            name="milage"
            rules={[
              {
                required: true,
                message: "Please input your car's milage!",
              },
            ]}
            required
          >
            <Input type="number" addonAfter="KM" />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input your car's price!",
              },
            ]}
            required
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            label="Ad Description"
            name="description"
            rules={[
              {
                required: true,
                message: "Please input your car's description!",
              },
            ]}
            required
          >
            <Input.TextArea rows={4} />
          </Form.Item>

          <Form.Item label="Engine Capacity" name="power">
            <Input type="number" addonAfter="CC" />
          </Form.Item>

          <Form.Item label="Transmission" name="transmission">
            <Select>
              <Option value="Auto">Auto</Option>
              <Option value="Manual">Manual</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Body Type" name="bodyType">
            <Select>
              <Option value="Hatchback">Hatchback</Option>
              <Option value="Sedan">Sedan</Option>
              <Option value="SUV">SUV</Option>
              <Option value="Pajero">Pajero</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Features" name="other">
            <Checkbox.Group
              options={otherFeatures}
              onChange={(e) => console.log(e.target)}
            />
          </Form.Item>
        </Card>

        <Card style={{ marginTop: "2rem" }}>
          <Typography.Title level={3}>Upload Photos</Typography.Title>
          <UploadPics />
        </Card>

        <Card style={{ marginTop: "2rem" }}>
          <Typography.Title level={3}>Contact Information</Typography.Title>
          <Form.Item
            label="Contact Number"
            name="contact"
            rules={[
              {
                required: true,
                message: "Please input your contact number!",
              },
            ]}
            required
          >
            <Input type="number" />
          </Form.Item>
        </Card>

        <div style={{ marginTop: "2rem" }}>
          <Button type="primary" htmlType="submit" block>
            Submit & Continue
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default postCar;
