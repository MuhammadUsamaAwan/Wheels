import { Tabs, Typography } from "antd";
import VehicleNews from "./VehicleNews";
import VehicleReview from "./VehicleReview";
import VehicleDiscussion from "./VehicleDiscussion";

const { Title } = Typography;
const { TabPane } = Tabs;

const NewsReviewsDiscussions = () => {
  return (
    <section className="container pd-5 pt-5">
      <Title level={2}>News, Reviews & Discussions</Title>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Automotive News" key="1">
          <VehicleNews />
          <VehicleNews />
        </TabPane>
        <TabPane tab="Car Reviews" key="2">
          <VehicleReview />
        </TabPane>
        <TabPane tab="Discussions" key="3">
          <VehicleDiscussion />
        </TabPane>
      </Tabs>
    </section>
  );
};

export default NewsReviewsDiscussions;
