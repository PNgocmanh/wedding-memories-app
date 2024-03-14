import { PlusCircleOutlined } from "@ant-design/icons";
import { Button, Popover, Modal, Form, Input, Space, message } from "antd";
import { useState } from "react";
import * as S from "./Menu.style";
import { SmileOutlined } from "@ant-design/icons";
import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { ErrorMessage, Formik } from "formik";
import UploadBanner from "./UploadImage";
import { UploadImage } from "../../services/uploadService";
import { memoryService } from "../../services/postService";

export default function CreateButton({ reload, setReload }) {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(false);
  const [content, setContent] = useState("");

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

  const handleCancelForm = (values) => {
    values.name = "";
    values.image = null;
    values.content = "";
    setVisible(false);
  };

  // useEffect(() => {
  //   console.log(content);
  // }, [content]);

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
        style={{ top: 20 }}
        onCancel={handleCancel}
        maskClosable={false} // Prevents closing on outside click
        footer={null}
      >
        <Formik
          initialValues={{
            name: "",
            image: null,
            content: "",
          }}
          validate={(values) => {
            const errors = {};
            if (!values.name) errors.name = "Please enter your name";
            if (!values.content) errors.content = "Please write something!";
            if (!values.image) errors.image = "Please upload an image.";
            return errors;
          }}
          onSubmit={async (values, { setSubmitting }) => {
            console.log("Received values of form: ", values);
            setSubmitting(true);
            const body = {
              userName: values.name,
              image: values.image,
              content: values.content,
            };

            await UploadImage(body.image)
              .then(async (res) => {
                body.image = res.data.url;
                await memoryService.createMemory(body).then((result) => {
                  message.success(`Tạo kỷ niệm thành công`);
                  setReload(!reload);
                });
              })
              .catch((error) => {
                console.log("Fail: ", error);
                message.error("Tạo thất bại, vui lòng thử lại!");
              })
              .finally(() => {
                setSubmitting(false);
                setVisible(false);
              });
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <div>
                <S.InputLabel htmlFor="name">Name</S.InputLabel>
                <Input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={values.name}
                  onBlur={handleBlur}
                  onChange={handleChange}
                  style={{ margin: "3px 0px" }}
                />
                <ErrorMessage
                  name="name"
                  component={"div"}
                  style={{ color: "red" }}
                />
              </div>
              <div>
                <S.InputLabel>Tải hình ảnh</S.InputLabel>
                <UploadBanner
                  uploadFile={values.image}
                  setUploadFile={setFieldValue}
                />
                <ErrorMessage
                  name="image"
                  component={"div"}
                  style={{ color: "red" }}
                />
              </div>
              <div style={{ marginBottom: "20px" }}>
                <S.InputLabel htmlFor="content">Content</S.InputLabel>
                <Input.TextArea
                  name="content"
                  value={values.content}
                  onChange={handleChange}
                  placeholder="Nhập văn bản..."
                  autoSize={{ minRows: 3, maxRows: 5 }}
                  maxLength={735}
                />
                <ErrorMessage
                  name="content"
                  component={"div"}
                  style={{ color: "red" }}
                />
                {/* <Popover
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
                </Popover> */}
              </div>

              <S.ButtonWrapper>
                <Form.Item noStyle>
                  <Space>
                    <Button danger onClick={() => handleCancelForm(values)}>
                      Cancel
                    </Button>
                    <Button
                      type="primary"
                      htmlType="submit"
                      loading={isSubmitting}
                    >
                      Create
                    </Button>
                  </Space>
                </Form.Item>
              </S.ButtonWrapper>
            </form>
          )}
        </Formik>
      </Modal>
    </>
  );
}
