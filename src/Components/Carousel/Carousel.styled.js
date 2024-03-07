import styled from "styled-components";

export const WrapperImage = styled.div`
  position: static;
  width: 200px;
  height: 230px;
  @media (min-width: 769px) {
    width: 250px;
    height: 370px;
  }
  @media (min-width: 1024px) {
    width: 300px;
    height: 470px;
  }
`;

export const WrapperCarousel = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
`;