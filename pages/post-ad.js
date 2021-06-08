import { useEffect } from "react";
import { Typography, Card } from "antd";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { toast } from "react-toastify";

const postAd = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const router = useRouter();
  useEffect(() => {
    if (!isLoggedIn) {
      toast.warning("Please login to post your ad!");
      router.push("/login");
    }
  }, []);

  if (!isLoggedIn) {
    return <></>;
  }
  return (
    <section className="page-start container">
      <Typography.Title level={2}>Browse Vehicles</Typography.Title>
      <div className="vehicle-catagory__main">
        <a href="/post-car">
          <Card
            hoverable
            cover={
              <img
                alt="car"
                src="https://upload.wikimedia.org/wikipedia/commons/1/19/Brazilian_Honda_Civic_touring_2017_%28cropped%29.jpg"
              />
            }
          >
            <Card.Meta title="Browse Cars" />
          </Card>
        </a>

        <a href="/post-bike">
          <Card
            hoverable
            cover={
              <img
                alt="bike"
                src="https://i.pinimg.com/736x/cc/cb/5a/cccb5a1d4f1f1dd10f58b96d485ce703.jpg"
              />
            }
          >
            <Card.Meta title="Browse Bikes" />
          </Card>
        </a>

        <a href="/post-van">
          <Card
            hoverable
            cover={
              <img
                alt="van"
                src="https://upload.wikimedia.org/wikipedia/commons/1/1a/2018_Ford_Transit_Custom_300_Base_2.0_facelift.jpg"
              />
            }
          >
            <Card.Meta title="Browse Vans" />
          </Card>
        </a>

        <a href="/post-bus">
          <Card
            hoverable
            cover={
              <img
                alt="bus"
                src="https://www.sustainable-bus.com/wp-content/uploads/2019/12/scania-bus4.jpg"
              />
            }
          >
            <Card.Meta title="Browse Buses" />
          </Card>
        </a>

        <a href="/post-truck">
          <Card
            hoverable
            cover={
              <img
                alt="trucks"
                src="https://mymodernmet.com/wp/wp-content/uploads/2018/04/jingle-truck-art-pakistan-thumbnail.jpg"
              />
            }
          >
            <Card.Meta title="Browse Trucks" />
          </Card>
        </a>

        <a href="/post-ricksaw">
          <Card
            hoverable
            cover={
              <img
                alt="rickshaw"
                src="https://image.made-in-china.com/43f34j00OMLQKupdESzW/4-Stroke-Rikshaw.jpg"
              />
            }
          >
            <Card.Meta title="Browse Rickshaws" />
          </Card>
        </a>

        <a href="/post-tractor">
          <Card
            hoverable
            cover={
              <img
                alt="tractor"
                src="https://assets.entrepreneur.com/content/3x2/2000/20200114202019-GettyImages-157636049.jpeg"
              />
            }
          >
            <Card.Meta title="Browse Tractor" />
          </Card>
        </a>
      </div>
    </section>
  );
};

export default postAd;
