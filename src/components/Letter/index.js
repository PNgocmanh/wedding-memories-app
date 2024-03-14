import React from "react";
import * as S from "./Letter.style";
import { Avatar, Divider, Typography } from "antd";
import { useResponsive } from "../../hooks/useResponsive";
import moment from "moment";

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
          src={content.image}
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
            <h3 style={{ fontSize: '24px' }}>From {content.userName}</h3>
          </S.BoxTitleItem>
          <S.BoxTitleDay>{moment(content.createdAt).format("DD/MM/YYYY")}</S.BoxTitleDay>
        </S.BoxTitle>
        <S.BoxText>{content.content}</S.BoxText>
      </S.BoxContent>
    </>
  );

  const NotOddPosition = (
    <>
      <S.BoxContent>
        <S.BoxTitle1>
          <S.BoxTitleItem1>
            <h3 style={{ fontSize: '24px' }}>From {content.userName}</h3>
          </S.BoxTitleItem1>
          <S.BoxTitleDay1>{moment(content.createdAt).format("DD/MM/YYYY")}</S.BoxTitleDay1>
        </S.BoxTitle1>
        <S.BoxText1>{content.content}</S.BoxText1>
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
          src={content.image}
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
            <h3 style={{ fontSize: '24px' }}>From {content.userName}</h3>
          </S.BoxTitleItem1>
          <S.BoxTitleDay1>{moment(content.createdAt).format("DD/MM/YYYY")}</S.BoxTitleDay1>
        </S.BoxTitle1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <S.BoxTextMobile>{content.content}</S.BoxTextMobile>
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
          src={content.image}
        />
        <S.ImageBoxBorder />
      </S.BoxImage>
    </>
  );

  return <S.Container>{isDesktop ? desktopView : mobileView}</S.Container>;
}
