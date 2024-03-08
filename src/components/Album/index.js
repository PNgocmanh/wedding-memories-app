import { Image, Row, Col } from "antd";
import React, { useEffect, useState } from "react";
import { useResponsive } from "../../hooks/useResponsive";
import * as S from './Album.styled'

export default function Album({ data }) {
  const { isDesktop } = useResponsive();
  const [column, setColumn] = useState(3);
  const itemsPerColumn = Math.ceil(data.length / column);

  const columnData = [
    data.slice(0, itemsPerColumn),
    data.slice(itemsPerColumn, itemsPerColumn * 2),
    data.slice(itemsPerColumn * 2),
  ];

  useEffect(() => {
    if (isDesktop) {
      setColumn(3);
    } else setColumn(2)
  }, [isDesktop]);
  return (
    <div>
      <Row justify="center">
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          {columnData.map((column, index) => (
            <Col key={index} xs={12} md={8}>
              {column.map((item, itemIndex) => (
                <S.Item key={itemIndex}>
                  <Image
                    src={item}
                    style={{
                      width: "100%",
                      height: "auto",
                      // marginBottom: "10px",
                      // border: '1px solid red'
                    }}
                  />
                </S.Item>
              ))}
            </Col>
          ))}
        </Image.PreviewGroup>
      </Row>
    </div>
  );
}
