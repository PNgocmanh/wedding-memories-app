import React from "react";
import { Carousel } from "antd";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg";
import image3 from "../../assets/images/image3.jpg";
import image4 from "../../assets/images/image4.jpg";
import image5 from "../../assets/images/image5.jpg";
import * as S from "./Slide.style";

const contentStyle = {
  margin: 0,
  height: "90vh",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const SliderImage = () => {
  return (
    <div
      style={{
        position: "relative"
      }}
    >
      <S.SlideTitleWrapper>
        <S.SlideTitle>
          <span>Phước Uyên</span>
          <S.IconHeart>&hearts;</S.IconHeart>
          <span>Cảnh Đức</span>
        </S.SlideTitle>
        <S.TextWeddingDay>17 Tháng 3 2024</S.TextWeddingDay>
      </S.SlideTitleWrapper>
      <Carousel autoplay>
        <S.SlideItem>
          <S.SlideImage src={image1} alt="" />
        </S.SlideItem>
        <S.SlideItem>
          <S.SlideImage src={image2} alt="" />
        </S.SlideItem>
        <S.SlideItem>
          <S.SlideImage src={image3} alt="" />
        </S.SlideItem>
        <S.SlideItem>
          <S.SlideImage src={image4} alt="" />
        </S.SlideItem>
        <S.SlideItem>
          <S.SlideImage src={image5} alt="" />
        </S.SlideItem>
      </Carousel>
    </div>
  );
};

export default SliderImage;
