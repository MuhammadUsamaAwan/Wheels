import { CommentOutlined, ClockCircleOutlined } from "@ant-design/icons";

const VehicleDiscussion = () => {
  return (
    <div className="vehicle-discussion">
      <a href="/" className="vehicle-discussion__title">
        Suzuki Ciaz Owners/ Fan Club
      </a>
      <p className="vehicle-discussion__text">
        I saw that we don’t have a dedicated forum for Suzuki Ciaz. The owners
        who own it maybe should share their experiences to help out the new car
        buyers out there. Lets use this forum to discuss the pros and cons of
        this ca…
      </p>
      <div className="vehicle-discussion__details">
        <div>
          <CommentOutlined /> 1123 Replies
        </div>
        <div>
          <ClockCircleOutlined /> 2017-09-24T17:41:30.196+05:00
        </div>
      </div>
    </div>
  );
};

export default VehicleDiscussion;
