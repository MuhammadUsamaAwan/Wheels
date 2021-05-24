import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

const LoadingIcon = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 50 }} spin />;
  return <Spin indicator={antIcon} />;
};

export default LoadingIcon;
