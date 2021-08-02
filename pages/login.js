import { Form, Input, Button, Checkbox, Typography } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { loginAction } from "../redux/actions/auth";
import { useRouter } from "next/router";
import { parseCookies } from "../utils/parseCookies";

const login = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const router = useRouter();
  const onFinish = values => {
    const { email, password, remember } = values;
    dispatch(loginAction(email, password, remember));
    if (isLoggedIn) router.push("/");
  };

  return (
    <Form
      className="container pt-15"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Typography.Title level={2}>Login</Typography.Title>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Please input your Email!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Email"
          type="email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
          iconRender={visible =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        <a className="login-form-forgot" href="/forgot-password">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        <span className="pl-1">
          Or <a href="/register">register now!</a>
        </span>
      </Form.Item>
    </Form>
  );
};

export async function getServerSideProps({ req, res }) {
  const cookies = parseCookies(req);
  if (cookies.isLoggedIn) {
    res.writeHead(303, { Location: "/" });
    res.end();
  }

  return { props: {} };
}

export default login;
