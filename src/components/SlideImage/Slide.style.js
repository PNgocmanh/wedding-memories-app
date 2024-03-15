import styled from "styled-components";

export const SlideItem = styled.div`
  margin: 0;
  height: 100vh;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (max-width: 600px) {
    /* position: fixed; */
    height: auto;
  }
`;

export const SlideImage = styled.img`
  width: 1427px;
  @media screen and (max-width: 600px) {
    width: 445px;
  }
`;

export const SlideTitleWrapper = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  @media screen and (max-width: 600px) {
    width: 100%;
    /* margin-left: -15px; */
  }
`;

export const SlideTitle = styled.h2`
  font-size: 4rem;
  font-family: "Helvetica Neue";
  color: #fff;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.6);
  margin-left: -15px;
  @media screen and (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

export const IconHeart = styled.i`
  font-size: 3rem;
  color: #dfa09f;
  margin: 0px 12px;
  @media screen and (max-width: 600px) {
    font-size: 1.7rem;
  }
`;

export const TextWeddingDay = styled.div`
  font-size: 1rem;
  color: #fff;
  font-weight: 300;
  text-shadow: 0px 3px 7px rgba(0, 0, 0, 0.35);
  letter-spacing: 2px;
  position: relative;
  margin-left: 20px;
  &::before {
    content: "";
    position: absolute;
    background: #fff;
    width: 35px;
    height: 1px;
    left: -50px;
    top: 9px;
  }

  &::after {
    content: "";
    position: absolute;
    background: #fff;
    width: 35px;
    height: 1px;
    right: -50px;
    top: 9px;
  }
`;
