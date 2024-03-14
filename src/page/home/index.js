import { Col, Divider, Row, Button, Image, Empty, Skeleton } from "antd";
import React, { useEffect, useState } from "react";
import { useResponsive } from "../../hooks/useResponsive";
import { useNavigate } from "react-router-dom";
import * as Home from "./Home.style";
import MusicButton from "../../components/MusicButton";
import MenuButton from "../../components/MenuButton";
import SliderImage from "../../components/SlideImage";
import Letter from "../../components/Letter";
import Footer from "../../components/footer";
import Album from "../../components/Album";
import groomimage from "../../assets/images/groom.png";
import brideimage from "../../assets/images/bride.png";
import IntroImage from "../../assets/images/intro.png";
import { useDispatch, useSelector } from "react-redux";
import { getAllMemories } from "../../redux/actions/memoriesAction";
import CountdownTimer from "../../components/Timer";

export default function HomePage() {
  const musicUrl = [
    "https://res.cloudinary.com/dbd0yztdb/video/upload/v1710396226/B%E1%BA%A0N_%C6%A0I_Rock_Ver._-_Myra_Tr%E1%BA%A7n_-_OST_L%E1%BA%ADt_M%E1%BA%B7t_6-_T%E1%BA%A5m_V%C3%A9_%C4%90%E1%BB%8Bnh_M%E1%BB%87nh_-_-C%C3%B2n_c%C3%B3_t%C3%B4i_c%C3%B3_anh_l%C3%A0_b%E1%BA%A1n...-_qk22z6.mp3",
    "",
    "https://res.cloudinary.com/dbd0yztdb/video/upload/v1710395000/Memories_-_Maroon_5_taptho.mp3",
    "https://res.cloudinary.com/dbd0yztdb/video/upload/v1710394581/first_date_z2p8rg.mp3",
    "https://res.cloudinary.com/dbd0yztdb/video/upload/v1709301405/CAN_YOU_FEEL_THE_LOVE_TONIGHT_Tutorial_Piano_Cover_plgmzv.mp3",
    "https://res.cloudinary.com/dbd0yztdb/video/upload/v1709243860/bgMusic_qkdddi.mp3",
  ];
  const { isTablet, isDesktop } = useResponsive();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const content = useSelector((state) => state.memories.post);
  const isLoading = useSelector((state) => state.memories.isLoading);
  const album = [
    "https://res.cloudinary.com/dbd0yztdb/image/upload/v1705505281/samples/dessert-on-a-plate.jpg",
    "https://res.cloudinary.com/dbd0yztdb/image/upload/v1705505281/samples/cup-on-a-table.jpg",
    "https://res.cloudinary.com/dbd0yztdb/image/upload/v1705505278/samples/outdoor-woman.jpg",
    "https://res.cloudinary.com/dbd0yztdb/image/upload/v1705505275/samples/balloons.jpg",
    "https://res.cloudinary.com/dbd0yztdb/image/upload/v1705505258/samples/ecommerce/car-interior-design.jpg",
    "https://res.cloudinary.com/dbd0yztdb/image/upload/v1705505255/samples/animals/three-dogs.jpg",
  ];

  const [reload, setReload] = useState(false);

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
    dispatch(getAllMemories());
  }, [dispatch, reload]);

  return (
    <>
      <Home.Container>
        <SliderImage />
        <Home.BoxContent>
          <Home.BoxIntroduce>
            <div>
              <CountdownTimer />
            </div>
            {/* <Home.BoxIntroduceTitle>Cô dâu & Chú rễ</Home.BoxIntroduceTitle> */}
            <Home.BoxIntroduceBody>
              <div>
                <Home.BrideImage src={brideimage} alt="Bride" />
                <Home.BrideName>Bùi Hà Phước Uyên</Home.BrideName>
              </div>
              <Home.IntroImage src={IntroImage} alt="intro_image" />
              <div>
                <Home.GroomImage src={groomimage} alt="Groom" />
                <Home.GroomName>Trần Cảnh Đức</Home.GroomName>
              </div>
            </Home.BoxIntroduceBody>
          </Home.BoxIntroduce>
          <Home.ContentWrapper>
            <Home.ContentTitleWrapper>
              <p>Những câu chuyện nhỏ</p>
            </Home.ContentTitleWrapper>
            <Home.ContentBodyWrapper>
              {isLoading ? (
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {/* <Skeleton.Image style={{ width: "300px", height: "300px" }} /> */}
                  <Skeleton />
                </div>
              ) : (
                <>
                  {content.length === 0 && (
                    <div
                      style={{
                        height: "300px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Empty />
                    </div>
                  )}
                  {content
                    ?.sort(
                      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    )
                    .map((item, index) => (
                      <div key={item?.id}>
                        <Letter content={item} position={index} />
                      </div>
                    ))}
                  {/* {content?.map((item, index) => (
                    <div key={item?.id}>
                      <Letter content={item} position={index} />
                    </div>
                  ))} */}
                </>
              )}
            </Home.ContentBodyWrapper>
          </Home.ContentWrapper>
          {/* <Home.AlbumWrapper>
            <Home.AlbumTitleWrapper>Album hình cưới</Home.AlbumTitleWrapper>
            <Home.AlbumBodyWrapper>
              <Album data={album} />
            </Home.AlbumBodyWrapper>
          </Home.AlbumWrapper> */}
          <div
            style={{
              width: "100%",
              height: "200px",
              background: "black",
              marginTop: "20px",
            }}
          ></div>
        </Home.BoxContent>
        <MusicButton musicUrl={musicUrl} />
        <MenuButton reload={reload} setReload={setReload} />
      </Home.Container>
    </>
  );
}
