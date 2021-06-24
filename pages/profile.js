import { Card, Avatar, Typography, Row, Col, Tabs, Empty } from "antd";
import { UserOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";
import FavAds from "../components/pages/profile/FavAds";
import PersonalAds from "../components/pages/profile/PersonalAds";
import EditProfile from "../components/pages/profile/EditProfile";

const Profile = () => {
  let user = useSelector(state => state.auth.user);
  const token = useSelector(state => state.auth.token);
  const { TabPane } = Tabs;
  return (
    <div className="page-start container profile">
      <Card className="profile__container">
        <Row className="profile__user-info">
          <Col>
            <Avatar size={100} icon={<UserOutlined />} />
          </Col>
          <Col>
            <Typography.Title level={3}>{user.name}</Typography.Title>
            <div>Member Since {user.createdAt}</div>
          </Col>
        </Row>
        <Tabs defaultActiveKey="3" centered>
          <TabPane tab="Edit Profile" key="1">
            <EditProfile email={user.email} token={token}/>
          </TabPane>
          <TabPane tab="My Fav Ads" key="2">
            <Empty />
          </TabPane>
          <TabPane tab="My Ads" key="3">
            <PersonalAds />
          </TabPane>
        </Tabs>
      </Card>
    </div>
  );
};

export default Profile;
