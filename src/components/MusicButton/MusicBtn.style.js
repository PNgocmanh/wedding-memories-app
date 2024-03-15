import { FONT_SIZE, FONT_WEIGHT, media } from "../../constants/theme";
import styled, { css } from "styled-components";
import { Button, Card, Checkbox, Form, Input, Row, Typography } from "antd";
import { LeftOutlined } from "@ant-design/icons";

export const Container = styled.div`
  /* width: 100%; */
  /* height: 100vh; */
  position: fixed;
  z-index: 100;
  bottom: 20px; /* Khoảng cách với đáy màn hình */
  left: 20px; /* Khoảng cách với phải màn hình */
`;