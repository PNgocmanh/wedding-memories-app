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
  /* background: yellow; */
`

export const BoxIntroduce = styled.div`
  width: 100%;
  /* height: 200px; */
  background: blue;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
`

export const BoxIntroduceTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: gray;
`

export const BoxIntroduceBody = styled.div`
  width: 100%;
  height: 200px;
  background: red;
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
  /* display: inline-block; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: gray;
`

export const ContentBodyWrapper = styled.div`
  width: 100%;
  /* height: 100px; */
  text-align: center;
  display: inline-block;
`

export const AlbumWrapper = styled.div`
  width: 100%;
  padding: 100px 0px;
`

export const AlbumTitleWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  background: red;
`

export const AlbumBodyWrapper = styled.div`
  /* width: 100%; */
  margin:  0px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    margin: 0px 8px;
  }
`
