import { FONT_SIZE, FONT_WEIGHT, media } from "../../constants/theme";
import styled, { css } from "styled-components";
import {
  Button,
  Card,
  Checkbox,
  Form,
  Image,
  Input,
  Row,
  Typography,
} from "antd";
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
`;

export const BoxIntroduce = styled.div`
  width: 100%;
  /* height: 200px; */
  background: blue;
  /* display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column; */
`;

export const BoxIntroduceTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  background-color: gray;
`;

export const BoxIntroduceBody = styled.div`
  width: 100%;
  height: auto;
  /* background: #f3f2ef; */
  background: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 50px 0px;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const IntroImage = styled.img`
  max-width: 500px;
  height: auto;
  @media screen and (max-width: 600px) {
    max-width: 350px;
  }
`;

export const BrideImage = styled.img`
  width: 300px;
  height: auto;
`;

export const BrideName = styled.h3`
  font-size: 2.3rem;
  font-weight: 600px;
  text-align: center;
  color: #4b7293;
  margin: 0px 0px 0px 0px;
  font-family: "Bonheur Royale", cursive;
`;

export const GroomName = styled.h3`
  text-align: center;
  font-size: 2.3rem;
  font-weight: 600px;
  color: #4b7293;
  margin: 0px;
  font-family: "Bonheur Royale", cursive;
`;

export const GroomImage = styled.img`
  width: 300px;
  height: auto;
  /* transform: scale(0.5); */
`;

export const ContentWrapper = styled.div`
  width: 100%;
  background: white;
  /* display: flex;
  justify-content: center;
  align-items: center; */
`;

export const ContentTitleWrapper = styled.div`
  width: 100%;
  height: 100px;
  text-align: center;
  /* display: inline-block; */
  display: flex;
  justify-content: center;
  align-items: center;
  background: #edf3f8;
`;

export const ContentBodyWrapper = styled.div`
  width: 100%;
  /* height: 100px; */
  text-align: center;
  margin-top: 20px;
  display: inline-block;
`;

export const AlbumWrapper = styled.div`
  width: 100%;
  padding: 100px 0px;
`;

export const AlbumTitleWrapper = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  background: red;
`;

export const AlbumBodyWrapper = styled.div`
  /* width: 100%; */
  margin: 0px 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 600px) {
    margin: 0px 8px;
  }
`;

export const TextTitle = styled.h2`
  font-size: 40px;
  line-height: 55px;
  font-family: 'Splash', cursive;
`
