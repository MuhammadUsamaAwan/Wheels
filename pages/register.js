import React, { useState } from "react";
import { Form, Input, Button, Typography } from "antd";
import {
  UserOutlined,
  LockOutlined,
  EyeInvisibleOutlined,
  EyeTwoTone,
} from "@ant-design/icons";
import { useSelector, useDispatch } from "react-redux";
import { registerAction } from "../redux/actions/auth";
import { toast } from "react-toastify";
import { useRouter } from "next/router";
import ReCAPTCHA from "react-google-recaptcha";
import { ReCAPTCHA_sitekey } from "../config/config";

const Register = () => {
  const [human, setHuman] = useState(false);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
  const router = useRouter();
  const onFinish = values => {
    const { name, email, password, password2 } = values;
    if (!human) toast.error("Please complete reCAPTCHA");
    else if (password !== password2) toast.error("Passwords don't match");
    else dispatch(registerAction(name, email, password));
  };

  if (isLoggedIn) router.push("/");

  return (
    <Form className="container--section" onFinish={onFinish}>
      <Typography.Title level={2}>Register</Typography.Title>
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
          type="text"
        />
      </Form.Item>
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
      <Form.Item
        name="password2"
        rules={[
          { required: true, message: "Please input to confirm your Password!" },
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Confirm Password"
          iconRender={visible =>
            visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
          }
        />
      </Form.Item>

      <ReCAPTCHA
        sitekey={ReCAPTCHA_sitekey}
        onChange={() => setHuman(true)}
        onExpired={() => setHuman(false)}
      />

      <Form.Item className="pt-2">
        <Button type="primary" htmlType="submit" className="login-form-button">
          Register
        </Button>
        <span className="pl-1">
          Or <a href="/login">login now!</a>
        </span>
      </Form.Item>
    </Form>
  );
};

export default Register;
