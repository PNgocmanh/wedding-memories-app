import { FONT_SIZE, FONT_WEIGHT, media } from "../../constants/theme";
import styled, { css } from "styled-components";
import { Button, Card, Checkbox, Form, Input, Row, Typography } from "antd";
import { LeftOutlined } from "@ant-design/icons";

export const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  /* overflow: auto; */
`;

export const BoxContent = styled.div`
  width: 100%;
  /* height: 100vh; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  background: yellow;
`

export const BoxIntroduce = styled.div`
  width: 100%;
  height: 200px;
  background: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContentWrapper = styled.div`
  width: 100%;
  background: white;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`

export const ContentTitleWrapper = styled.div`
  width: 100%;
  height: 100px;
  text-align: center;
  display: inline-block;
  background: gray;
`

export const ContentBodyWrapper = styled.div`
  width: 100%;
  /* height: 100px; */
  text-align: center;
  display: inline-block;
`

