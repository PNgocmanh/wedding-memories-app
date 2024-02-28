import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import * as Auth from "./SignUp.styles";
import { Link } from "react-router-dom";

const SignUpForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = () => {
    setIsLoading(true);
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    <Form
      form={form}
      name="normal_sign_up"
      className="login-form"
      layout="vertical"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Auth.FormTitle>Sign Up</Auth.FormTitle>
      <Form.Item
        name="username"
        label={<Auth.LabelHeading>Username</Auth.LabelHeading>}
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Auth.FormInput
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Enter your username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        label={<Auth.LabelHeading>Password</Auth.LabelHeading>}
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Auth.FormInputPassword
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Password"
        />
      </Form.Item>
      <Auth.ActionsWrapper>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Auth.FormCheckbox>Remember me</Auth.FormCheckbox>
        </Form.Item>
        <Link to="/login">You have an account?</Link>
      </Auth.ActionsWrapper>
      <Form.Item noStyle>
        <Auth.SubmitButton
          type="primary"
          htmlType="submit"
          loading={isLoading}
        >
          Sign Up {""}
        </Auth.SubmitButton>
      </Form.Item>
      <Auth.FooterWrapper></Auth.FooterWrapper>
    </Form>
  );
};

export default SignUpForm;
