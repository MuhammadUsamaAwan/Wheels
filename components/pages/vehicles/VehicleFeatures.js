import { Typography } from "antd";

const VechicleFeatures = () => {
  return (
    <div className="vehicles__features">
      <div className="vehicles__features__item">
        <img src="/images/website-ads.svg" alt="free ads" />
        <Typography.Title level={4}>Free Ad</Typography.Title>
        <p>Post your ad for free in 30 seconds.</p>
      </div>

      <div className="vehicles__features__item">
        <img src="/images/handshake.svg" alt="genuine buyers" />
        <Typography.Title level={4}>Genuine Buyers</Typography.Title>
        <p>Get authentic offers from verified buyers.</p>
      </div>

      <div className="vehicles__features__item">
        <img src="/images/quick.svg" alt="sell faster" />
        <Typography.Title level={4}>Sell Faster</Typography.Title>
        <p>Sell your car faster than others at a better price.</p>
      </div>
    </div>
  );
};

export default VechicleFeatures;
