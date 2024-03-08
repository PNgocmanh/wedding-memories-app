import React from "react";
import * as S from "./Letter.style";
import { Avatar, Divider, Typography } from "antd";
import { useResponsive } from "../../hooks/useResponsive";

const Triangle = ({ position }) => {
  return <>{position % 2 === 0 ? <S.BoxTriagle /> : <S.BoxTriagle1 />}</>;
};

export default function Letter({ content, position }) {
  const { isTablet, isDesktop } = useResponsive();
  const img =
    "https://res.cloudinary.com/dbd0yztdb/image/upload/v1705505279/samples/man-on-a-street.jpg";

  const OddPosition = (
    <>
      <S.BoxImage>
        <Avatar
          shape="square"
          style={{ width: "100%", height: "auto" }}
          src={img}
        />
        <S.ImageBoxBorder />
      </S.BoxImage>
      <S.BoxDivider>
        <S.DividerContent
          type="vertical"
          dashed
          style={{
            borderWidth: "2px",
          }}
        />
      </S.BoxDivider>
      <S.BoxContent>
        <S.BoxTitle>
          <S.BoxTitleItem>
            <Avatar shape="square" size={"large"} src={img} />
          </S.BoxTitleItem>
          <S.BoxTitleItem>
            <h3>Username</h3>
          </S.BoxTitleItem>
          <S.BoxTitleDay>05/03/2024</S.BoxTitleDay>
        </S.BoxTitle>
        {/* {isDesktop && <Triangle position={position} />} */}
        <S.BoxText>
          Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao có thể
          thích một người chưa từng gặp mặt? Vậy mà giờ đây tôi lại đang như
          vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu thật đấy!!! Ngày ấy vu
          vơ đăng một dòng status trên facebook than thở, vu vơ đùa giỡn nói
          chuyện với một người xa lạ chưa từng quen. Mà nào hay biết, 4 năm sau
          người ấy lại là chồng mình.
        </S.BoxText>
      </S.BoxContent>
    </>
  );

  const NotOddPosition = (
    <>
      <S.BoxContent>
        <S.BoxTitle1>
          <S.BoxTitleItem1>
            <h3>Username</h3>
          </S.BoxTitleItem1>
          <S.BoxTitleItem1>
            <Avatar shape="square" size={"large"} src={img} />
          </S.BoxTitleItem1>
          <S.BoxTitleDay1>05/03/2024</S.BoxTitleDay1>
        </S.BoxTitle1>
        {isDesktop && <Triangle position={position} />}
        <S.BoxText1>
          Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao có thể
          thích một người chưa từng gặp mặt? Vậy mà giờ đây tôi lại đang như
          vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu thật đấy!!! Ngày ấy vu
          vơ đăng một dòng status trên facebook than thở, vu vơ đùa giỡn nói
          chuyện với một người xa lạ chưa từng quen. Mà nào hay biết, 4 năm sau
          người ấy lại là chồng mình.
        </S.BoxText1>
      </S.BoxContent>
      <S.BoxDivider>
        <S.DividerContent
          type="vertical"
          dashed
          style={{
            borderWidth: "2px",
          }}
        />
      </S.BoxDivider>
      <S.BoxImage>
        <Avatar
          shape="square"
          style={{ width: "100%", height: "auto" }}
          src={img}
        />
        <S.ImageBoxBorder />
      </S.BoxImage>
    </>
  );

  const desktopView = <>{position % 2 === 0 ? OddPosition : NotOddPosition}</>;

  const mobileView = (
    <>
      <S.BoxContent>
        <S.BoxTitle1>
          <S.BoxTitleItem1>
            <h3>Username</h3>
          </S.BoxTitleItem1>
          <S.BoxTitleItem1>
            <Avatar shape="square" size={"large"} src={img} />
          </S.BoxTitleItem1>
          <S.BoxTitleDay1>05/03/2024</S.BoxTitleDay1>
        </S.BoxTitle1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <S.BoxText1>
            Tôi đã từng không tin vào tình yêu online. Đã từng nghĩ làm sao có
            thể thích một người chưa từng gặp mặt? Vậy mà giờ đây tôi lại đang
            như vậy, bây giờ tôi đã hiểu: thế giới ảo tình yêu thật đấy!!! Ngày
            ấy vu vơ đăng một dòng status trên facebook than thở, vu vơ đùa giỡn
            nói chuyện với một người xa lạ chưa từng quen. Mà nào hay biết, 4
            năm sau người ấy lại là chồng mình.
          </S.BoxText1>
        </div>
      </S.BoxContent>
      <S.BoxDivider>
        <S.DividerContent
          type="vertical"
          dashed
          style={{
            borderWidth: "2px",
          }}
        />
      </S.BoxDivider>
      <S.BoxImage>
        <Avatar
          shape="square"
          style={{ width: "100%", height: "auto" }}
          src={img}
        />
        <S.ImageBoxBorder />
      </S.BoxImage>
    </>
  );

  return <S.Container>{isDesktop ? desktopView : mobileView}</S.Container>;
}
