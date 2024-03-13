import React from "react";
import { Carousel } from "antd";
import image1 from "../../assets/images/image1.jpg";
import image2 from "../../assets/images/image2.jpg"
import image3 from "../../assets/images/image3.jpg"
import image4 from "../../assets/images/image4.jpg"
import image5 from "../../assets/images/image5.jpg"

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
    <Carousel autoplay>
      <div>
        <h3 style={contentStyle}>
          <img src={image1} width={1427} alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src={image2} width={1427} alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src={image3} width={1427} alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src={image4} width={1427} alt="" />
        </h3>
      </div>
      <div>
        <h3 style={contentStyle}>
          <img src={image5} width={1427} alt="" />
        </h3>
      </div>
    </Carousel>
  );
};

export default SliderImage;
