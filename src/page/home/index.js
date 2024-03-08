import { Col, Divider, Row, Button } from "antd";
import React, { useEffect } from "react";
import { useResponsive } from "../../hooks/useResponsive";
import { useNavigate } from "react-router-dom";
import * as Home from "./Home.style";
import MusicButton from "../../components/MusicButton";
import MenuButton from "../../components/MenuButton";
import SliderImage from "../../components/SlideImage";
import Letter from "../../components/Letter";
import Footer from "../../components/footer";
import Album from "../../components/Album";

export default function HomePage() {
  const musicUrl = [
    "https://res.cloudinary.com/dbd0yztdb/video/upload/v1709243860/bgMusic_qkdddi.mp3",
    "https://res.cloudinary.com/dbd0yztdb/video/upload/v1709301405/CAN_YOU_FEEL_THE_LOVE_TONIGHT_Tutorial_Piano_Cover_plgmzv.mp3",
  ];
  const { isTablet, isDesktop } = useResponsive();
  const navigate = useNavigate();
  const content = [];
  const album = [
    "https://res.cloudinary.com/dbd0yztdb/image/upload/v1705505281/samples/dessert-on-a-plate.jpg",
    "https://res.cloudinary.com/dbd0yztdb/image/upload/v1705505281/samples/cup-on-a-table.jpg",
    "https://res.cloudinary.com/dbd0yztdb/image/upload/v1705505278/samples/outdoor-woman.jpg",
    "https://res.cloudinary.com/dbd0yztdb/image/upload/v1705505275/samples/balloons.jpg",
    "https://res.cloudinary.com/dbd0yztdb/image/upload/v1705505258/samples/ecommerce/car-interior-design.jpg",
    "https://res.cloudinary.com/dbd0yztdb/image/upload/v1705505255/samples/animals/three-dogs.jpg"
  ]

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
            <Home.BoxIntroduceTitle>
              Cô dâu & Chú rễ
            </Home.BoxIntroduceTitle>
            <Home.BoxIntroduceBody>
              Hình đám cưới + cô dâu + chú rễ
            </Home.BoxIntroduceBody>
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
          <Home.AlbumWrapper>
            <Home.AlbumTitleWrapper>
              Album hình cưới
            </Home.AlbumTitleWrapper>
            <Home.AlbumBodyWrapper>
              <Album data={album} />
            </Home.AlbumBodyWrapper>
          </Home.AlbumWrapper>
        </Home.BoxContent>
        <div
          style={{ width: "100%", height: "200px", background: "black" }}
        ></div>
        <MusicButton musicUrl={musicUrl} />
        <MenuButton />
        <Footer />
      </Home.Container>
    </>
  );
}
