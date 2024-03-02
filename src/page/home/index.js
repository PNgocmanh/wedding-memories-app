import { Col, Divider, Row, Button } from "antd";
import React from "react";
import { useResponsive } from "../../hooks/useResponsive";
import { useNavigate } from "react-router-dom";
import * as Home from "./Home.style";
import MusicButton from "../../components/MusicButton";
import MenuButton from "../../components/MenuButton";
import SliderImage from "../../components/SlideImage";

export default function HomePage() {
  const musicUrl = [
    "https://res.cloudinary.com/dbd0yztdb/video/upload/v1709243860/bgMusic_qkdddi.mp3",
    "https://res.cloudinary.com/dbd0yztdb/video/upload/v1709301405/CAN_YOU_FEEL_THE_LOVE_TONIGHT_Tutorial_Piano_Cover_plgmzv.mp3",
  ];
  const { isTablet, isDesktop } = useResponsive();
  const navigate = useNavigate();

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

  return (
    <>
      <Home.Container>
        <SliderImage />
        {isDesktop ? desktopView : mobileView}
        <MusicButton musicUrl={musicUrl} />
        <MenuButton />
      </Home.Container>
    </>
  );
}
