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
  margin-top: 30px;
  margin-left: 20px;
  margin-bottom: 15px;
  `;

export const BoxTitleItem = styled.div`
  display: inline-block;
  margin-right: 15px;
  font-family: 'Shantell Sans', cursive;
`;

export const BoxTitleItem1 = styled.div`
  display: inline-block;
  margin-left: 15px;
  font-family: 'Shantell Sans', cursive;
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
  margin-top: 30px;
  margin-right: 20px;
  margin-bottom: 15px;
  @media screen and (max-width: 600px) {
    text-align: center;
    margin: 0px;
  }
`;

export const BoxTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BoxText = styled.div`
  position: relative;
  font-size: 18px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 10px;
  width: 400px;
  min-height: 80px;
  text-align: left;
  padding: 20px;
  margin: 0px 50px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    left: 0px;
    top: 22px;
    box-sizing: border-box;
    border: 13px solid black;
    border-color: transparent transparent #fff #fff;
    transform-origin: 0 0;
    transform: rotate(45deg);
    box-shadow: -3px 3px 3px 0px #eee;
  }
`;

export const BoxText1 = styled.div`
  position: relative;
  font-size: 18px;
  box-sizing: border-box;
  background-color: white;
  border-radius: 10px;
  width: 400px;
  min-height: 80px;
  text-align: right;
  padding: 20px;
  margin: 0px 50px;
  box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.15);
  &::after {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    right: -25px;
    top: 55px;
    box-sizing: border-box;
    border: 13px solid black;
    border-color: transparent transparent #fff #fff;
    transform-origin: 0 0;
    transform: rotate(-135deg);
    box-shadow: -3px 3px 3px 0px #eee;
  }
`;

export const BoxTextMobile = styled.div`
  font-size: 16px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.15);
  width: 350px;
  height: auto;
  text-align: center;
  padding: 20px;
  margin: 10px 10px 16px 10px;
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
