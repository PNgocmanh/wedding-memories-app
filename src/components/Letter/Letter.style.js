import { FONT_SIZE, FONT_WEIGHT, media } from "../../constants/theme";
import styled, { css } from "styled-components";
import {
  Button,
  Card,
  Checkbox,
  Divider,
  Form,
  Input,
  Row,
  Typography,
} from "antd";
import { LeftOutlined } from "@ant-design/icons";

export const Container = styled.div`
  width: 100%;
  /* height: 100vh; */
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const BoxImage = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  /* flex-grow: 1; */
  @media screen and (max-width: 600px) {
    width: 370px;
    height: 370px;
  }
`;

export const ImageBoxBorder = styled.div`
  border: 1px solid white;
  width: 480px;
  height: 480px;
  transition: background-color 0.3s ease;
  position: absolute;
  z-index: 2;
  &:hover {
    background-color: rgba(255, 255, 255, 0.4);
  }
  @media screen and (max-width: 600px) {
    width: 350px;
    height: 350px;
  }
  
`;

export const BoxContent = styled.div`
  background: yellow;
  width: 500px;
  height: 500px;
  @media screen and (max-width: 600px) {
    width: 100%;
    height: auto;
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center;
    flex-direction: column; */
  }
`;

export const BoxTitle = styled.div`
  text-align: left;
  border: 1px solid red;
  margin-top: 30px;
  margin-left: 20px;
  margin-bottom: 15px;
`;

export const BoxTitleItem = styled.div`
  display: inline-block;
  margin-right: 15px;
`;

export const BoxTitleItem1 = styled.div`
  display: inline-block;
  margin-left: 15px;
`;

export const BoxTitleDay = styled.div`
  font-size: 14px;
  color: #6c7a89;
`;
export const BoxTitleDay1 = styled.div`
  font-size: 14px;
  color: #6c7a89;
  /* margin-right: 20px; */
`;

export const BoxTitle1 = styled.div`
  text-align: right;
  border: 1px solid red;
  margin-top: 30px;
  margin-right: 20px;
  margin-bottom: 15px;
  @media screen and (max-width: 600px) {
    text-align: center;
    margin: 0px;
  }
`;

export const BoxTriagle = styled.div`
  background-color: white;
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  width: 30px;
  height: 30px;
  position: absolute;
  z-index: 3;
  rotate: -90deg;
  margin: 30px 22px;
`;

export const BoxTriagle1 = styled.div`
  background-color: white;
  clip-path: polygon(50% 0, 100% 100%, 0 100%);
  width: 30px;
  height: 30px;
  position: absolute;
  z-index: 3;
  rotate: 90deg;
  margin: 30px 448px;
`;

export const BoxTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxText = styled.div`
  font-size: 16px;
  background-color: white;
  border-radius: 10px;
  width: 400px;
  text-align: left;
  padding: 20px;
  margin: 0px 50px;
`;

export const BoxText1 = styled.div`
  font-size: 16px;
  background-color: white;
  border-radius: 10px;
  width: 400px;
  text-align: right;
  padding: 20px;
  margin: 0px 10px;
  @media screen and (max-width: 600px) {
    width: 350px;
    height: auto;
    text-align: center;
    margin: 10px 10px 16px 10px;
    border: 1px solid black;
    background-color: red;
  }
`;

export const DividerContent = styled(Divider)`
  border-color: red;
  height: 200px;
  @media screen and (max-width: 600px) {
    height: 50px;
    margin-top: 15px;
  }
`;

export const BoxDivider = styled.div`
  @media screen and (max-width: 600px) {
    order: 2;
  }
`;
