import { PlusCircleOutlined } from "@ant-design/icons";
import {
  Button,
  Popover,
  Modal,
  Form,
  Input,
  Space,
  Upload,
  message,
} from "antd";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as S from "./Menu.style";
import { SmileOutlined } from "@ant-design/icons";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import ImgCrop from "antd-img-crop";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

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

export default function CreateButton() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState("");

  const [image, setImage] = useState([]);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState("");
  const handleCancelPreview = () => setPreviewOpen(false);
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64ForPreView(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const handleChangePreview = ({ fileList: newFileList }) =>
    setImage(newFileList);

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

  const handleAddIcon = (emoji) => {
    setContent((prevValue) => prevValue + emoji.native);
  };

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleCreate = () => {
    setLoading(true);
    setTimeout(() => {
      setVisible(false);
      setLoading(false);
      console.log("Create post");
    }, 2000);
  };

  useEffect(() => {
    console.log(content);
  }, [content]);

  const handleRemove = ({ fileList: newFileList }) => setImage([]);

  const handleConvertPreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64ForPreView(file.originFileObj);
    }
  };

  const customItemRender = (originNode, file, fileList) => {
    handleConvertPreview(file);
    return (
      <div key={file.uid}>
        <img
          src={file.preview}
          alt="preview"
          style={{ width: "100%", height: "auto" }}
        />
        {originNode}
      </div>
    );
  };

  return (
    <>
      <Popover placement="left" content={"send  a new message"}>
        <Button
          type="primary"
          shape="circle"
          size="large"
          icon={<PlusCircleOutlined />}
          onClick={showModal}
        ></Button>
      </Popover>
      <Modal
        title="Send memories"
        open={visible}
        onOk={handleCreate}
        onCancel={handleCancel}
        maskClosable={false} // Prevents closing on outside click
        footer={null}
      >
        <Form
          form={form}
          name="basic"
          layout="vertical"
          onFinish={handleCreate}
        >
          <Form.Item
            name="upload"
            label={<S.LabelHeading>Upload Image</S.LabelHeading>}
            rules={[{ required: true, message: "This field is required!" }]}
          >
            <ImgCrop rotationSlider showReset showGrid aspect={4 / 3}>
              <Upload
                action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                listType="picture"
                name="avatar"
                onPreview={handlePreview}
                onChange={handleChangePreview}
                // beforeUpload={beforeUpload}
                // itemRender={customItemRender}
              >
                {image.length >= 1 ? null : uploadButton}
              </Upload>
            </ImgCrop>

            <Modal
              open={previewOpen}
              title="Your Image"
              footer={null}
              onCancel={handleCancelPreview}
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
          <Form.Item
            name="content"
            label={<S.LabelHeading>Content</S.LabelHeading>}
            rules={[{ required: true, message: "This field is required!" }]}
          >
            <div>
              <Input.TextArea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Nhập văn bản..."
                autoSize={{ minRows: 3, maxRows: 5 }}
              />
              <Popover
                placement="top"
                trigger="click"
                content={
                  <>
                    <S.EmojiWrapper>
                      <Picker
                        data={data}
                        theme="light"
                        previewPosition="none"
                        onEmojiSelect={handleAddIcon}
                      />
                    </S.EmojiWrapper>
                  </>
                }
              >
                <Button
                  style={{ marginTop: "10px" }}
                  icon={<SmileOutlined />}
                ></Button>
                {" Add Emoji"}
              </Popover>
            </div>
          </Form.Item>
          <S.ButtonWrapper>
            <Form.Item noStyle>
              <Space>
                <Button danger onClick={handleCancel}>
                  Cancel
                </Button>
                <Button type="primary" htmlType="submit" loading={loading}>
                  Create
                </Button>
              </Space>
            </Form.Item>
          </S.ButtonWrapper>
        </Form>
      </Modal>
    </>
  );
}
