import { Col, Divider, Row, Button } from "antd";
import React, { useEffect } from "react";
import { useResponsive } from "../../hooks/useResponsive";
import { useNavigate } from "react-router-dom";
import * as Home from "./Home.style";
import MusicButton from "../../components/MusicButton";
import MenuButton from "../../components/MenuButton";
import SliderImage from "../../components/SlideImage";
import Letter from "../../components/Letter";

export default function HomePage() {
  const musicUrl = [
    "https://res.cloudinary.com/dbd0yztdb/video/upload/v1709243860/bgMusic_qkdddi.mp3",
    "https://res.cloudinary.com/dbd0yztdb/video/upload/v1709301405/CAN_YOU_FEEL_THE_LOVE_TONIGHT_Tutorial_Piano_Cover_plgmzv.mp3",
  ];
  const { isTablet, isDesktop } = useResponsive();
  const navigate = useNavigate();
  const content = [];

  const desktopView = (
    <Home.BoxContent>
      <p>HomePage</p>
    </Home.BoxContent>
  );

  const mobileView = (
    <>
      <p>Mobile View</p>
    </>
  );

  useEffect(() => {
    console.log("Home");
  }, []);

  return (
    <>
      <Home.Container>
        <SliderImage />
        {/* {isDesktop ? desktopView : mobileView} */}
        <Home.BoxContent>
          <Home.BoxIntroduce>
            <>Hình cô dâu chú rể</>
          </Home.BoxIntroduce>
          <Home.ContentWrapper>
            <Home.ContentTitleWrapper>
              <p>HomePage</p>
            </Home.ContentTitleWrapper>
            <Home.ContentBodyWrapper>
              <Letter content={content} position={0} />
              <Letter content={content} position={1} />
            </Home.ContentBodyWrapper>
          </Home.ContentWrapper>
        </Home.BoxContent>
        <div
          style={{ width: "100%", height: "200px", background: "black" }}
        ></div>
        <MusicButton musicUrl={musicUrl} />
        <MenuButton />
      </Home.Container>
    </>
  );
}
