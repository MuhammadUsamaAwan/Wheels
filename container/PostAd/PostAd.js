import { useEffect } from "react";
import { Card } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const PostAd = () => {
  const router = useRouter();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  useEffect(() => {
    if (!isLoggedIn) router.push("/login");
  }, []);
  return (
    <section className="section-container post-adv">
      <a href="/sell-car">
        <Card className="post-adv__sell-menu">
          Sell Your Car
          <ArrowRightOutlined />
        </Card>
      </a>
      <a href="/sell-bike">
        <Card className="post-adv__sell-menu">
          Sell Your Bike
          <ArrowRightOutlined />
        </Card>
      </a>
      <a href="/sell-bus">
        <Card className="post-adv__sell-menu">
          Sell Your Bus
          <ArrowRightOutlined />
        </Card>
      </a>
      <a href="/sell-rikshaw">
        <Card className="post-adv__sell-menu">
          Sell Your Rikshaw
          <ArrowRightOutlined />
        </Card>
      </a>
      <a href="/sell-truck">
        <Card className="post-adv__sell-menu">
          Sell Your truck
          <ArrowRightOutlined />
        </Card>
      </a>
    </section>
  );
};

export default PostAd;
