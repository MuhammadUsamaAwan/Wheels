import { Typography, Steps, Button } from "antd";

const PostYourAd = () => {
  return (
    <section className="post-your-ad container--pad">
      <div className="post-your-ad__cont">
        <Typography.Title level={2}>
          Sell Your Vehicle and Get the best Price
        </Typography.Title>
        <Steps direction="vertical" current={3}>
          <Steps.Step title="Post your Ad for Free" />
          <Steps.Step title="Get Genuine offers from Verified Buyers" />
          <Steps.Step title="Sell your vehicle Fast at the Best Price" />
        </Steps>
        <Button type="primary" size="large">
          <a href="/post-ad">Post Your Ad</a>
        </Button>
      </div>
    </section>
  );
};

export default PostYourAd;
