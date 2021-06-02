import { Select, Typography, Form, Button } from "antd";

const { Option } = Select;

const SearchCarBikes = () => {
  return (
    <Form>
      <Typography.Title level={3}>Search Cars & Bikes</Typography.Title>
      <Form.Item name="type">
        <Select defaultValue="Cars">
          <Option value="Cars">Cars</Option>
          <Option value="Bikes">Bikes</Option>
        </Select>
      </Form.Item>
      <Form.Item name="make">
        <Select placeholder="Select Make">
          <Option value="Suzuki">Suzuki</Option>
          <Option value="Toyota">Toyota</Option>
        </Select>
      </Form.Item>
      <Form.Item name="model">
        <Select placeholder="Select Model">
          <Option value="XLI">XLI</Option>
          <Option value="Mehran">Mehran</Option>
        </Select>
      </Form.Item>
      <Form.Item name="version">
        <Select placeholder="Select Version">
          <Option value="Automatic">Automatic</Option>
          <Option value="Manual">Manual</Option>
        </Select>
      </Form.Item>
      <Form.Item name="price">
        <Select placeholder="Price Upto">
          <Option value="10 lacs">10 lacs</Option>
          <Option value="20 lacs">20 lacs</Option>
        </Select>
      </Form.Item>
      <Button type="primary" htmlType="submit" block>
        Search
      </Button>
    </Form>
  );
};

export default SearchCarBikes;
