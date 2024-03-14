import styled from "styled-components";

export const SlideItem = styled.div`
  margin: 0;
  height: 90vh;
  color: #fff;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  @media screen and (max-width: 600px) {
    /* position: fixed; */
    height: auto
  }
`

export const SlideImage = styled.img`
  width: 1427px;
  @media screen and (max-width: 600px) {
    width: 445px;
    
  }
`