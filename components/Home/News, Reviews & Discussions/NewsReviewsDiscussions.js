import { Tabs } from "antd";
import { Typography } from "antd";
import CarDiscussion from "./CarDiscussion";
import CarReview from "./CarReview";
import News from "./News";

const { Title } = Typography;
const { TabPane } = Tabs;

const NewsReviewsDiscussions = () => {
  return (
    <section className="container--pad">
      <Title level={2}>News, Reviews & Discussions</Title>
      <Tabs defaultActiveKey="1">
        <TabPane tab="Automotive News" key="1">
          <News />
          <News />
        </TabPane>
        <TabPane tab="Car Reviews" key="2">
          <CarReview />
        </TabPane>
        <TabPane tab="Discussions" key="3">
          <CarDiscussion />
        </TabPane>
      </Tabs>
    </section>
  );
};

export default NewsReviewsDiscussions;
