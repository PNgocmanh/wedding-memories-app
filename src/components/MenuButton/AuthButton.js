import { LoginOutlined, LogoutOutlined } from "@ant-design/icons";
import { Button, Popover } from "antd";
import { useNavigate } from "react-router-dom";

export default function AuthButton() {
  const navigate = useNavigate();
  // const token = localStorage.getItem("token");
  const token = null;

  const handleClick = () => {
    if (token === null) {
      navigate("/login");
    }
  };
  return (
    <>
      <Popover placement="left" content={!token ? "Login" : "Logout"}>
        <Button
          type="primary"
          shape="circle"
          size="large"
          icon={!token ? <LoginOutlined /> : <LogoutOutlined />}
          onClick={handleClick}
        ></Button>
      </Popover>
    </>
  );
}
