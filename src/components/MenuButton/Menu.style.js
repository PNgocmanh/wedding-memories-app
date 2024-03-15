import { FONT_SIZE, FONT_WEIGHT, media } from "../../constants/theme";
import styled, { css } from "styled-components";
import { Button, Card, Checkbox, Form, Input, Row, Typography } from "antd";
import { LeftOutlined } from "@ant-design/icons";

export const Container = styled.div`
  position: fixed;
  z-index: 100;
  bottom: 20px; /* Khoảng cách với đáy màn hình */
  right: 20px; /* Khoảng cách với phải màn hình */
`;

export const MenuWrapper = styled.div`
  position: fixed;
  bottom: 110px; /* Khoảng cách với đáy màn hình */
  right: 40px; /* Khoảng cách với phải màn hình */
`;

export const EmojiWrapper = styled.div``;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: right;
`;

export const UploadWrapper = styled.div`
  width: 200px; /* Chiều rộng của vùng upload */
  height: 200px; /* Chiều cao của vùng upload */
  border: 1px solid #d9d9d9; /* Viền */
  border-radius: 2px; /* Bo tròn viền */
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const FormTitle = styled.div`
  color: var(--primary-color);

  @media only screen and (${media.xs}) {
    margin-bottom: 0.625rem;
    font-size: ${FONT_SIZE.lg};
    font-weight: ${FONT_WEIGHT.bold};
    line-height: 1.5625rem;
  }

  @media only screen and (${media.md}) {
    margin-bottom: 0.875rem;
    font-size: ${FONT_SIZE.xxl};
    font-weight: ${FONT_WEIGHT.bold};
    line-height: 1.9375rem;
  }

  @media only screen and (${media.xl}) {
    margin-bottom: 0.9375rem;
    font-size: ${FONT_SIZE.xxxl};
    font-weight: ${FONT_WEIGHT.extraBold};
    line-height: 2.125rem;
  }
`;

export const LabelHeading = styled.div`
  color: var(--primary-color);
  font-size: ${FONT_SIZE.lg};
  font-weight: ${FONT_WEIGHT.bold};
`;

export const BoxImageUpload = styled.div`
  border: 1px solid #d9d9d9; 
  border-radius: 2px; 
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  margin: 2px 0px 5px 0px;
`

export const InputLabel = styled.label`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.bold};
`

export const ErrorText = styled.div`
  color: red;
`