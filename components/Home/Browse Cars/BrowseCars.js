import { Tabs, Typography } from "antd";
import Budget from "./Budget";
import Catagory from "./Catagory";

const { TabPane } = Tabs;
const { Title } = Typography;

const BrowseCars = () => {
  return (
    <section className="browse-used-cars container--pad">
      <Title level={2}>Browse Used Cars</Title>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Catagory" key="1">
          <Catagory />
        </TabPane>
        <TabPane tab="Budget" key="2">
          <Budget />
        </TabPane>
        <TabPane tab="Make" key="3">
          Make
        </TabPane>
        <TabPane tab="Model" key="4">
          Model
        </TabPane>
        <TabPane tab="Body Type" key="5">
          Body Type
        </TabPane>
        <TabPane tab="City" key="6">
          City
        </TabPane>
      </Tabs>
    </section>
  );
};

export default BrowseCars;
