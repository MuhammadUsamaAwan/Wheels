import { Typography, Layout, Menu } from "antd";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const Search = () => {
  return (
    <Layout style={{ minHeight: "100vh" }} className="page-start">
      <Sider breakpoint="md" collapsedWidth="0">
        <Menu defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1">
            Option 1
          </Menu.Item>
          <Menu.Item key="2">
            Option 2
          </Menu.Item>
          <SubMenu key="sub1" title="User">
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout>
        <Content style={{ margin: "0 16px" }}>
          <div>
              Da content da dhol da pakpalada
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Search;
