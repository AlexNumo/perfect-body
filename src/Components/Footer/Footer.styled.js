import styled from "styled-components";
import Image from "next/image";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  width: calc(100% - 60px);
  margin-bottom: 50px;
  margin-top: 50px;
  &:before {
    content: "";
    position: absolute;
    top: -25px;
    width: 100vw;
    height: 2px; 
    background-color: #D69F8C;
  }
  p{
    text-align: center;
  }
  @media (min-width: 769px) {
    width: calc(100% - 100px);
  }
`;

export const WrapperLogo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 25px;
  margin-bottom: 15px;
`;

export const ImageLogo = styled(Image)`
  width: 160px;
  height: 51px;
`;