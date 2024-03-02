import React, { useState } from "react";
import { Button, Popover, Dropdown, Space, Menu } from "antd";
import { MenuOutlined, CloseOutlined, MailOutlined } from "@ant-design/icons";
import AuthButton from "./AuthButton";
import CreateButton from "./CreateButton";
import * as MenuS from './Menu.style'

export default function MenuButton() {
  const [open, setOpen] = useState(true);

  const handleClickOpen = () => {
    setOpen(!open);
  };

  return (
    <>

    <MenuS.Container>
      <Button
        type="primary"
        shape="circle"
        icon={open ? <CloseOutlined /> : <MenuOutlined />}
        size="large"
        onClick={handleClickOpen}
      ></Button>
    </MenuS.Container>
      {open && <MenuS.MenuWrapper>
        <Space direction='vertical'>
          <AuthButton />
          <CreateButton />
        </Space>
      </MenuS.MenuWrapper>}
    </>
  );
}
