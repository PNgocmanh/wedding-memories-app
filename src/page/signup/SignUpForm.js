import React, { useState } from "react";
import { Form, Input, Button, Checkbox, Typography } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import * as Auth from "./SignUp.styles";
import { Link } from "react-router-dom";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { message, Upload, Modal } from "antd";
import ImgCrop from "antd-img-crop";
import { register } from "../../redux/actions/userAction";

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

const getBase64ForPreView = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const beforeUpload = (file) => {
  const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
  if (!isJpgOrPng) {
    message.error("You can only upload JPG/PNG file!");
  }
  const isLt2M = file.size / 1024 / 1024 < 2;
  if (!isLt2M) {
    message.error("Image must smaller than 2MB!");
  }
  return isJpgOrPng && isLt2M;
  // return isJpgOrPng;
};

const SignUpForm = () => {
  const [form] = Form.useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const isLoading = useSelector((state) => state.user.isLoading);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const [loading, setLoading] = useState(false);
  const [fileList, setFileList] = useState([]);

  const handleCancel = () => setPreviewOpen(false);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64ForPreView(file.originFileObj);
    }
    console.log(file);
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: "none",
        color: "black",
      }}
      type="button"
    >
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
          color: "black",
        }}
      >
        Upload Avatar
      </div>
    </button>
  );

  const onFinish = (values) => {
    setIsLoading(true);
    console.log("Received values of form: ", values);
    // dispatch(register(values, navigate))
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
        rules={[{ required: true, message: "This field is required!" }]}
      >
        <Auth.FormInputPassword
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="confirm-password"
        label={<Auth.LabelHeading>Confirm Password</Auth.LabelHeading>}
        rules={[{ required: true, message: "This field is required!" }]}
      >
        <Auth.FormInputPassword
          prefix={<LockOutlined className="site-form-item-icon" />}
          placeholder="Confirm Password"
        />
      </Form.Item>
      <Form.Item
        name="avatar"
        label={<Auth.LabelHeading>Avatar</Auth.LabelHeading>}
        valuePropName="fileList"
        getValueFromEvent={(e) => {
          if (Array.isArray(e)) {
            return e;
          }
          return e && e.fileList;
        }}
        rules={[{ required: true, message: "This field is required!" }]}
      >
        <ImgCrop rotationSlider showReset showGrid>
          <Upload
            action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
            // action="https://api.cloudinary.com/v1_1/dbd0yztdb/image/upload"
            listType="picture-card"
            // fileList={fileList}
            maxCount={1}
            onPreview={handlePreview}
            // onChange={handleChange}
            // beforeUpload={beforeUpload}
          >
            {fileList.length >= 1 ? null : uploadButton}
          </Upload>
        </ImgCrop>
        <Modal
          open={previewOpen}
          title="Your Avatar"
          footer={null}
          onCancel={handleCancel}
        >
          <img
            alt="example"
            style={{
              width: "100%",
            }}
            src={previewImage}
          />
        </Modal>
      </Form.Item>
      <Auth.ActionsWrapper>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Auth.FormCheckbox>Remember me</Auth.FormCheckbox>
        </Form.Item>
        <Link to="/login">You have an account?</Link>
      </Auth.ActionsWrapper>
      <Form.Item noStyle>
        <Auth.SubmitButton type="primary" htmlType="submit" loading={isLoading}>
          Sign Up {""}
        </Auth.SubmitButton>
      </Form.Item>
      <Auth.FooterWrapper></Auth.FooterWrapper>
    </Form>
  );
};

export default SignUpForm;
