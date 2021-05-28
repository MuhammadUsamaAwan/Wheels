import { useEffect } from "react";
import { Card } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const PostAd = () => {
  const router = useRouter();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  useEffect(() => {
    if (!isLoggedIn) {
      router.push("/login");
      toast.error("Login first to post ads");
    }
  }, []);

  if (!isLoggedIn) {
    return <></>;
  }

  return (
    <section className="container--section post-adv">
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
          Sell Your Truck
          <ArrowRightOutlined />
        </Card>
      </a>
    </section>
  );
};

export default PostAd;
