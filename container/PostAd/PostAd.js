import { useEffect } from "react";
import { Card, Typography } from "antd";
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
    <section className="container--section--less post-adv">
      <Card>
        <Typography.Title level={2}>What Do You Want to Sell?</Typography.Title>
        <div className="post-adv__main">
          <a href="/sell-car">
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://upload.wikimedia.org/wikipedia/commons/1/19/Brazilian_Honda_Civic_touring_2017_%28cropped%29.jpg"
                />
              }
            >
              <Card.Meta title="Sell Your Car" />
            </Card>
          </a>

          <a href="/sell-bike">
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://i.pinimg.com/736x/cc/cb/5a/cccb5a1d4f1f1dd10f58b96d485ce703.jpg"
                />
              }
            >
              <Card.Meta title="Sell Your Bike" />
            </Card>
          </a>

          <a href="/sell-bus">
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://www.sustainable-bus.com/wp-content/uploads/2019/12/scania-bus4.jpg"
                />
              }
            >
              <Card.Meta title="Sell Your Bus" />
            </Card>
          </a>

          <a href="/sell-truck">
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://mymodernmet.com/wp/wp-content/uploads/2018/04/jingle-truck-art-pakistan-thumbnail.jpg"
                />
              }
            >
              <Card.Meta title="Sell Your Truck" />
            </Card>
          </a>

          <a href="/sell-rikshaw">
            <Card
              hoverable
              cover={
                <img
                  alt="example"
                  src="https://image.made-in-china.com/43f34j00OMLQKupdESzW/4-Stroke-Rikshaw.jpg"
                />
              }
            >
              <Card.Meta title="Sell Your Rikshaw" />
            </Card>
          </a>
        </div>
      </Card>
    </section>
  );
};

export default PostAd;
