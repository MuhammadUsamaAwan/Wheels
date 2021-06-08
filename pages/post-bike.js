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
} from "antd";
import { useSelector, useDispatch } from "react-redux";
import { getManufacturers } from "../redux/actions/manufacturer";
import LoadingIcon from "../components/UI/LoadingIcon";
import UploadPics from "../components/UI/UploadPics";
import { postAd } from "../service/service";

const { Option, OptGroup } = Select;
const layout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 21 },
};

const postCar = () => {
  const token = useSelector(state => state.auth.token);
  const manufacturer = useSelector(state => state.manufacturer);
  const img = useSelector(state => state.img);
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
    options = manufacturer.result.map(make => ({
      value: make.title,
      label: make.title,
      children: make.model.map(model => ({
        value: model.title,
        label: model.title,
      })),
    }));
  }

  const onFinish = () => {
    const images = {
      images: img,
    };
    values.push(images);
    const vehicleType = {
      vehicleType: "car",
    };
    values.push(vehicleType);
    postAd(token, values);
    console.log(values);
  };
  return (
    <section className="container page-start">
      <Typography.Title level={2}>
        Sell Your Bike In 3 Easy Steps!
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
              { required: true, message: "Please input your bike's title!" },
            ]}
            required
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="City"
            name="city"
            rules={[
              { required: true, message: "Please input your bike's city!" },
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
            name="title"
            rules={[
              { required: true, message: "Please input your bike's info!" },
            ]}
            required
          >
            <Cascader options={options} />
          </Form.Item>

          <Form.Item
            label="Model Year"
            name="modelYear"
            rules={[
              {
                required: true,
                message: "Please input your bike's model year!",
              },
            ]}
            required
          >
            <DatePicker picker="year" />
          </Form.Item>

          <Form.Item
            label="Brand New"
            name="brandNew"
            rules={[
              {
                required: true,
                message: "Please select if your bike is brand new!",
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
            label="Engine Type"
            name="engineType"
            rules={[
              {
                required: true,
                message: "Please input your bike's engine type!",
              },
            ]}
            required
          >
            <Select>
              <Option value="2 Stroke">2 Stroke</Option>
              <Option value="4 Stroke">4 Stroke</Option>
            </Select>
          </Form.Item>

          <Form.Item
            label="Mileage"
            name="milage"
            rules={[
              {
                required: true,
                message: "Please input your bike's milage!",
              },
            ]}
            required
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item
            label="Price"
            name="price"
            rules={[
              {
                required: true,
                message: "Please input your bike's price!",
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
                message: "Please input your bike's description!",
              },
            ]}
            required
          >
            <Input.TextArea rows={4} />
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
          <Button type="primary" block>
            Submit & Continue
          </Button>
        </div>
      </Form>
    </section>
  );
};

export default postCar;
