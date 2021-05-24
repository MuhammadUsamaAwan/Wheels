import { useEffect } from "react";
import { Form, Input, Button, Cascader, Typography, Select } from "antd";
import LoadingIcon from "../../components/UI/LoadingIcon";
import { useSelector, useDispatch } from "react-redux";
import { getManufacturers } from "../../redux/actions/manufacturer";
import UploadPics from "../../components/UI/UploadPics";
import { postAd } from "../../redux/actions/postAd";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const { Option, OptGroup } = Select;
const { TextArea } = Input;

const SellCar = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const token = useSelector(state => state.auth.token);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const img = useSelector(state => state.img);
  const manufacturer = useSelector(state => state.manufacturer);
  useEffect(async () => {
    if (!isLoggedIn) router.push("/login");
    else dispatch(getManufacturers(token));
  }, []);

  if (manufacturer.isLoading)
    return (
      <div className="section-container">
        <LoadingIcon />
      </div>
    );

  const options = manufacturer.result.map(make => ({
    label: make.title,
    value: make.title,
    children: make.model.map(model => ({
      label: model.title,
      value: model.title,
    })),
  }));

  const onFinish = values => {
    values.title = values.title.join(" ");
    values = { ...values, images: img, vehicleType: "car" };
    if (img.length < 2)
      toast.error("Please upload atleast 2 images of your car");
    else dispatch(postAd(token, values));
  };

  return (
    <section className="section-container">
      <Form onFinish={onFinish}>
        <Typography.Title level={2}>Car Information</Typography.Title>

        <Form.Item name="city" label="City" rules={[{ required: true }]}>
          <Select placeholder="City" allowClear>
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
          rules={[{ required: true, message: "Please input your car info!" }]}
        >
          <Cascader options={options} placeholder="Please select" />
        </Form.Item>
        <Form.Item
          label="Model Year"
          name="modelYear"
          rules={[
            { required: true, message: "Please input your car's model Year!" },
          ]}
        >
          <Input type="number" placeholder="Model Year" />
        </Form.Item>
        <Form.Item name="registrationCity" label="Registration City">
          <Select placeholder="Registration City" allowClear>
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
          label="Country"
          name="country"
          rules={[
            { required: true, message: "Please input your car's country!" },
          ]}
        >
          <Input placeholder="Country" />
        </Form.Item>
        <Form.Item
          name="color"
          label="Exterior Color"
          rules={[
            {
              required: true,
              message: "Please input your car's exterior color!",
            },
          ]}
        >
          <Select placeholder="Exterior Color" allowClear>
            <Option value="Black">Black</Option>
            <Option value="White">White</Option>
            <Option value="Red">Red</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="engineType"
          label="Engine Type"
          rules={[
            {
              required: true,
              message: "Please input your car's engine Type!",
            },
          ]}
        >
          <Select placeholder="Engine Type" allowClear>
            <Option value="Petrol">Petrol</Option>
            <Option value="Diesel">Diesel</Option>
            <Option value="Electric">Electric</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="local"
          label="Local Manufactured"
          rules={[
            {
              required: true,
              message: "Please provide if your car is locally manufactured!",
            },
          ]}
        >
          <Select placeholder="Local Manufactured" allowClear>
            <Option value="true">Yes</Option>
            <Option value="false">No</Option>
          </Select>
        </Form.Item>
        <Form.Item
          label="Mileage (KM)"
          name="milage"
          rules={[
            { required: true, message: "Please input your car's mileage!" },
          ]}
        >
          <Input addonBefore="KM" type="number" placeholder="Mileage" />
        </Form.Item>
        <Form.Item
          label="Price (Rs.)"
          name="price"
          rules={[
            { required: true, message: "Please input your car's price!" },
          ]}
        >
          <Input addonBefore="PKR" type="number" placeholder="Price" />
        </Form.Item>
        <Form.Item
          label="Ad Description"
          name="description"
          rules={[
            {
              required: true,
              message: "Please input your car's description !",
            },
          ]}
        >
          <TextArea
            placeholder="Describe your car"
            autoSize={{ minRows: 3, maxRows: 5 }}
          />
        </Form.Item>
        <Typography.Title level={2}>Upload Photos</Typography.Title>
        <UploadPics />

        <br />
        <Typography.Title level={2}>Contact Information</Typography.Title>
        <Form.Item
          label="Mobile Number"
          name="contact"
          rules={[
            { required: true, message: "Please input your mobile number!" },
          ]}
        >
          <Input placeholder="Mobile Number" type="number" />
        </Form.Item>

        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form>
    </section>
  );
};

export default SellCar;
